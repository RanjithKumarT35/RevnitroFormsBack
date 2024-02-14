const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const pdf = require("html-pdf");
const fs = require("fs");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Hostinger SMTP server address
  port: 587, // Port for non-secure connection, use 465 for secure connection
  secure: false, // Set to true for secure connection (use port 465)
  auth: {
    user: process.env.nodeMailer_User,
    pass: process.env.nodeMailer_Pass,
  },
});

async function sendMailWithPDF(toEmail, subject, content) {
  const pdfOptions = { format: "Letter" };

  // Directory path where you want to save the PDF file
  const directoryPath = __dirname + "/";

  // Function to create the directory if it doesn't exist
  const createDirectoryIfNotExists = (directory) => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  };

  // Create the directory if it doesn't exist
  createDirectoryIfNotExists(directoryPath);

  await pdf.create(content, pdfOptions).toFile(directoryPath + "attachment.pdf", (err, attachment) => {
    if (err) {
      console.error("Error creating PDF:", err);
      return;
    }

    const mailOptions = {
      from: process.env.nodeMailer_User,
      to: toEmail,
      subject: subject,
      html: content,
      attachments: [
        {
          filename: "attachment.pdf",
          path: attachment.filename,
          encoding: "base64",
        },
      ],
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log("Error occurred:", error);
      } else {
        console.log("Email sent:", info.response);
        // Delete the temporary PDF file after sending the email
        await fs.unlinkSync(attachment.filename);
      }
    });
  });
}

module.exports = { sendMailWithPDF };
