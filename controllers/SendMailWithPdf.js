const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const pdf = require("html-pdf");
const fs = require("fs");
dotenv.config();
process.env.OPENSSL_CONF = './openssl.cnf';  //  '/path/to/your'
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.nodeMailer_User,
//     pass: process.env.nodeMailer_Pass,
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Hostinger SMTP server address
  port: 465, // Port for non-secure connection, use 465 for secure connection
  secure: true, // Set to true for secure connection (use port 465)
  auth: {
    user: process.env.nodeMailer_User,
    pass: process.env.nodeMailer_Pass,
  },
});

async function sendMailWithPDF(toEmail, subject, content) {
  const pdfOptions = { format: "Letter" };

  await pdf
    .create(content, pdfOptions)
    .toFile(__dirname + "/attachment.pdf", (err, attachment) => {
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
