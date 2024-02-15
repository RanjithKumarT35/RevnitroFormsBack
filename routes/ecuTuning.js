const express = require("express");
const { sendMailWithPDF } = require("../controllers/SendMailWithPdf");
var router = express.Router();
router.post("/", async (req, res) => {
  try {
    const details = await req.body;
    const Subject = "ECU Tuning Request From RevNitro";
    const content = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mention Notification</title>
        <style>
          .notification-container {
            font-family: sans-serif;
            max-width: 100%;
            margin: 0 auto;
          }

          .notification-content {
            margin-bottom: 20px;
          }

          .button-link {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #f01f1f;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            border: none;
            cursor: pointer;
          }

          .button-link:hover {
            background-color: #6af071;
          }

          .logo-container {
            margin-top: 20px;
          }

          .logo-container img {
            width: 100px; /* Adjust the size as needed */
            height: auto;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${Subject}</h1>
        </div>
        <div class="notification-container">
          <p>Name: <strong>${details.personname}</strong></p>
          <p>Email: <strong>${details.email}</strong></p>
          <p>Mobile Number: <strong>${details.phoneNo}</strong></p>
          <p>Location: <strong>${details.location}</strong></p>
          <p>Address: <strong>${details.address}</strong></p>
          <p>Vehicle Name: <strong>${details.vehiclename}</strong></p>
          <p>Vehicle Model: <strong>${details.vehiclemodel}</strong></p>
          <p>My Issues: <strong>${details.issues}</strong></p>
          <p>ServiceLocation: <strong>${details.servicelocation}</strong></p>
          <br/>
          <br/>
          <div class="logo-container">
          <p>With Regards,</p>
          <p>Team RevNitro</p>
          </div>
        </div>
      </body>
    </html>
    `;
    await sendMailWithPDF(process.env.nodeMailer_User, Subject, content);
    res.status(200).send(true);
  } catch (err) {
    res.status(500).send(false);
  }
});
module.exports = router;
