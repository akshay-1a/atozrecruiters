import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

const getPaymentEmailTemplate = (data: FormData) => `
<h2>New Payment Submission</h2>
<p><strong>First Name:</strong> ${data.get("firstName")}</p>
<p><strong>Last Name:</strong> ${data.get("lastName")}</p>
<p><strong>Mobile Number:</strong> ${data.get("mobileNumber")}</p>
<p><strong>Email:</strong> ${data.get("email")}</p>
<p><strong>Service:</strong> ${data.get("serviceName")}</p>
<p><strong>Amount:</strong> ₹${data.get("serviceAmount")}</p>
<p><strong>Reference Number:</strong> ${data.get("referenceNumber")}</p>
`;

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email configuration is missing");
  }

  return nodemailer.createTransport({
    service: "Zoho",
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Function to add data to Google Sheet
async function addToGoogleSheet(data: FormData) {
  const auth = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const values = [
    [
      `${data.get("firstName")} ${data.get("lastName")}`,
      data.get("mobileNumber"),
      data.get("email"),
      data.get("serviceName"),
      data.get("serviceAmount"),
      data.get("referenceNumber"),
    ],
  ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Payment!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    console.log("Sheet successfully updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating sheet:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error("Missing configuration");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const emailTemplate = getPaymentEmailTemplate(formData);
    const subject = `New Payment Submission: ${formData.get(
      "firstName"
    )} ${formData.get("lastName")}`;

    const transporter = createTransporter();

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: "atozrecruitersllp@gmail.com",
      // to: "akshay1.py@gmail.com",
      replyTo: (formData.get("email") as string) || process.env.EMAIL_USER,
      subject: subject,
      html: emailTemplate,
      attachments: [],
    };

    const paymentScreenshot = formData.get("paymentScreenshot") as File;
    if (paymentScreenshot) {
      const buffer = Buffer.from(await paymentScreenshot.arrayBuffer());
      mailOptions.attachments?.push({
        filename: paymentScreenshot.name,
        content: buffer,
      });
    }

    try {
      await transporter.verify();
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);

      // Add data to Google Sheet
      await addToGoogleSheet(formData);

      return NextResponse.json(
        { message: "Payment submitted successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json(
        { message: "Error processing submission" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing payment submission:", error);
    return NextResponse.json(
      { message: "Error processing payment submission" },
      { status: 500 }
    );
  }
}
