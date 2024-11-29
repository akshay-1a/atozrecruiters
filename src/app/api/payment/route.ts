import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

export async function POST(request: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration");
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
      to: "akshay1.py@gmail.com",
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

      return NextResponse.json(
        { message: "Payment submitted successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return NextResponse.json(
        { message: "Error sending email" },
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
