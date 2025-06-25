import nodemailer from "nodemailer";
import config from "../config/env.config.js";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., Gmail, SendGrid, etc.)
  auth: {
    user: config.EMAIL_FROM,
    pass: config.EMAIL_PASS,
  },
});

const sendMail = async (userData) => {
  const mailOptions = {
    // from: '"Sourabh Badgaiya" <sourabhbadgaiya2@gmail.com>',
    from: `"${userData.name}" <${userData.email}>`,
    to: config.EMAIL_TO,
    cc: config.EMAIL_CC_FRANCHISE,
    subject: userData.subject,
    text: `
        Dear Sir/Madam,

        I am interested in exploring franchise opportunities with your organization. Below are my details:

        Name: ${userData.name}
        Email: ${userData.email}
        Phone: ${userData.phone}
        State: ${userData.state}
        City: ${userData.city}

        Please provide further details about the franchise opportunity at your earliest convenience.

        Regards,
        ${userData.name}
    `,
    html: `
        <h3>Franchise Opportunity Inquiry</h3>
        <p>Dear Sir/Madam,</p>
        <p>I am interested in exploring franchise opportunities with your organization. Below are my details:</p>
        <ul>
            <li><strong>Name:</strong> ${userData.name}</li>
            <li><strong>Email:</strong> ${userData.email}</li>
            <li><strong>Phone:</strong> ${userData.phone}</li>
            <li><strong>State:</strong> ${userData.state}</li>
            <li><strong>City:</strong> ${userData.city}</li>
        </ul>
        <p>Please provide further details about the franchise opportunity at your earliest convenience.</p>
        <p>Regards,<br>${userData.name}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
