import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

// Email templates (keep your existing templates)
const getCandidateEmailTemplate = (data: any) => `
<h2>New Candidate Application</h2>
<p><strong>Full Name:</strong> ${data.fullName}</p>
<p><strong>Phone:</strong> ${data.contact}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Experience:</strong> ${data.experience} years</p>
<p><strong>Notice Period / LWD:</strong> ${data.noticePeriod}</p>
<p><strong>Current / Last salary:</strong> ${data.currentSalary}</p>
<p><strong>Expected Salary:</strong> ${data.expectedSalary}</p>
<p><strong>Preferred Job Role:</strong> ${data.jobRole}</p>
<p><strong>Preferred Job Location:</strong> ${data.location}</p>
<p><strong>Resume:</strong> View Attached documents</p>
`;

const getClientEmailTemplate = (data: any) => `
<h2>New Business Proposal</h2>
<p><strong>Full Name:</strong> ${data.fullName}</p>
<p><strong>Designation:</strong> ${data.designation}</p>
<p><strong>Organization:</strong> ${data.organization}</p>
<p><strong>Employee Strength:</strong> ${data.employeeStrength}</p>
<p><strong>Contact:</strong> ${data.contact}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Location:</strong> ${data.location}</p>
${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
<p><strong>Requirements:</strong> ${data.requirements}</p>
`;

// Updated transporter configuration for Zoho
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

type FormType = "candidate" | "client";

// Function to get the appropriate recipient email based on form type
const getRecipientEmail = (formType: FormType) => {
  const recipients = {
    candidate: "akshay1.py@gmail.com",
    client: "proposal@atozrecruiters.com",
  } as const;

  return recipients[formType];
};

// Function to add data to Google Sheet
async function addToGoogleSheet(
  formType: FormType,
  data: Record<string, string>
) {
  const auth = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const values =
    formType === "candidate"
      ? [
          [
            data.fullName,
            data.contact,
            data.email,
            data.experience,
            data.noticePeriod,
            data.currentSalary,
            data.expectedSalary,
            data.jobRole,
            data.location
          ],
        ]
      : [
          [
            data.fullName,
            data.contact,
            data.email,
            data.designation,
            data.organization,
            data.employeeStrength,
            data.location,
            data.website || "",
            data.requirements,
          ],
        ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: formType === "candidate" ? "Candidates!A:I" : "Clients!A:I",
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

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
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
    const formType = formData.get("formType") as FormType;

    // Validate form type
    if (formType !== "candidate" && formType !== "client") {
      return NextResponse.json(
        { message: "Invalid form type" },
        { status: 400 }
      );
    }

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        data[key] = value;
      }
    });

    const emailTemplate =
      formType === "candidate"
        ? getCandidateEmailTemplate(data)
        : getClientEmailTemplate(data);

    const subject =
      formType === "candidate"
        ? `New Candidate Application: ${data.fullName}`
        : `New Business Proposal: ${data.organization}`;

    const transporter = createTransporter();
    const recipientEmail = getRecipientEmail(formType);

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      replyTo: data.email || process.env.EMAIL_USER,
      subject: subject,
      html: emailTemplate,
    };

    if (formType === "candidate") {
      const resumeFile = formData.get("resume") as File;
      if (resumeFile) {
        const buffer = await resumeFile.arrayBuffer();
        mailOptions.attachments = [
          {
            filename: resumeFile.name,
            content: Buffer.from(buffer),
          },
        ];
      }
    }

    try {
      // Verify connection first
      await transporter.verify();
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      console.log("Sent to:", recipientEmail);

      // Add data to Google Sheet
      await addToGoogleSheet(formType, data);

      return NextResponse.json(
        { message: "Form submitted successfully" },
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
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { message: "Error processing form submission" },
      { status: 500 }
    );
  }
}
