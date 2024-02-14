const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const PDFDocument = require("pdfkit");
const fs = require("fs");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Hostinger SMTP server address
  port: 465, // Port for non-secure connection, use 465 for secure connection
  secure: true, // Set to true for secure connection (use port 465)
  auth: {
    user: process.env.nodeMailer_User,
    pass: process.env.nodeMailer_Pass,
  },
});

async function generatePDF(content) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filename = "attachment.pdf";
    const stream = fs.createWriteStream(filename);

    doc.pipe(stream);
    doc.text(content);

    stream.on("finish", () => {
      resolve(filename);
    });

    doc.end();
  });
}

async function sendMailWithPDF(toEmail, subject, content) {
  try {
    const filename = await generatePDF(content);

    const mailOptions = {
      from: process.env.nodeMailer_User,
      to: toEmail,
      subject: subject,
      html: content,
      attachments: [
        {
          filename: "attachment.pdf",
          path: filename,
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred:", error);
      } else {
        console.log("Email sent:", info.response);
      }

      // Delete the temporary PDF file after sending the email
      fs.unlink(filename, (err) => {
        if (err) {
          console.error("Error deleting PDF file:", err);
        } else {
          console.log("PDF file deleted");
        }
      });
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
}

module.exports = { sendMailWithPDF };
