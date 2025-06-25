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
    from: `"${userData.fullname}"`,
    to: config.EMAIL_TO, // e.g., info@yourcompany.com
    cc: config.EMAIL_CC_LOCATE, // e.g., info@yourcompany.com
    subject: "New Location Inquiry – Website Lead",
    text: `
      A new location inquiry has been submitted via the website.

      Full Name: ${userData.fullname}
      Mobile: ${userData.mobile}
      Location: ${userData.location}
      Message: ${userData.message || "No message provided."}

      Please reach out to the user at your earliest convenience.
    `,
    html: `
      <h2>📍 New Location Inquiry</h2>
      <p>A user has submitted their location through the website. Here are the details:</p>
      <table style="width:100%; border-collapse:collapse; font-family:sans-serif;">
        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><strong>Full Name:</strong></td>
          <td style="padding:10px; border:1px solid #ddd;">${
            userData.fullname
          }</td>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><strong>Mobile:</strong></td>
          <td style="padding:10px; border:1px solid #ddd;">${
            userData.mobile
          }</td>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><strong>Location:</strong></td>
          <td style="padding:10px; border:1px solid #ddd;">${
            userData.location
          }</td>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><strong>Message:</strong></td>
          <td style="padding:10px; border:1px solid #ddd;">${
            userData.message || "No message provided."
          }</td>
        </tr>
      </table>
      <p style="margin-top:20px;">Please follow up with the user as needed.</p>
      <p>Regards,<br><em>Your Website Team</em></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
