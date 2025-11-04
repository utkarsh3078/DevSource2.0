import transporter from "../config/nodemailer.js";

/**
 * @param {string} to - The recipient's email address
 * @param {string} subject - The subject line
 * @param {string} html - The HTML body of the email
 */
export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.SENDER_EMAIL, // Make sure SENDER_EMAIL is in your .env
      to: to,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    // We log the error but don't stop the main API request
    console.error(`Error sending email to ${to}: ${error.message}`);
  }
};
