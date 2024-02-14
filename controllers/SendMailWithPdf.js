const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const puppeteer = require("puppeteer");
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

async function sendMailWithPDF(toEmail, subject, content) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set content to the page
  await page.setContent(content);

  // Generate PDF from the page content
  const pdfBuffer = await page.pdf({
    format: "A4", // Set the PDF format
    printBackground: true, // Print background graphics
  });

  // Close the browser
  await browser.close();

  const mailOptions = {
    from: process.env.nodeMailer_User,
    to: toEmail,
    subject: subject,
    html: content,
    attachments: [
      {
        filename: "attachment.pdf",
        content: pdfBuffer, // Attach the PDF buffer
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = { sendMailWithPDF };
