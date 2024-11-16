// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email templates
const getCandidateEmailTemplate = (data: any) => `
<h2>New Candidate Application</h2>
<p><strong>Full Name:</strong> ${data.fullName}</p>
<p><strong>Father's Name:</strong> ${data.fathersName}</p>
<p><strong>Experience:</strong> ${data.experience} years</p>
<p><strong>Current Role:</strong> ${data.currentRole}</p>
<p><strong>Contact:</strong> ${data.contact}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Location:</strong> ${data.location}</p>
${data.resume ? `<p><strong>Resume Link:</strong> ${data.resume}</p>` : ""}
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
    service: "Zoho", // Add this line
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465 port
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
    candidate: "resume@atozrecruiters.com",
    client: "proposal@atozrecruiters.com",
  } as const;

  return recipients[formType];
};

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const data = await request.json();
    const { formType, ...formData } = data;
    // Validate form type
    if (formType !== "candidate" && formType !== "client") {
      return NextResponse.json(
        { message: "Invalid form type" },
        { status: 400 }
      );
    }
    const emailTemplate =
      formType === "candidate"
        ? getCandidateEmailTemplate(formData)
        : getClientEmailTemplate(formData);

    const subject =
      formType === "candidate"
        ? `New Candidate Application: ${formData.fullName}`
        : `New Business Proposal: ${formData.organization}`;

    const transporter = createTransporter();
    const recipientEmail = getRecipientEmail(formType);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      replyTo: formData.email || process.env.EMAIL_USER,
      subject: subject,
      html: emailTemplate,
    };

    try {
      // Verify connection first
      await transporter.verify();
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      console.log("Sent to:", recipientEmail);

      return NextResponse.json(
        { message: "Form submitted successfully" },
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
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { message: "Error processing form submission" },
      { status: 500 }
    );
  }
}
