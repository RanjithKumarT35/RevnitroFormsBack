const Tieup = require("../modals/tieups");
const carService = require("../modals/CarServiceInbox");
const bikeService = require("../modals/BikeServiceInbox");
const carConsultation = require("../modals/CarConsultationInbox");
const bikeConsultation = require("../modals/BikeConsultationInbox");
const ecuTuning = require("../modals/EcuTuningInbox");
const joinRacing = require("../modals/JoinRacingInbox");
const ownershipReview = require("../modals/OwnershipReviewInbox");
const productionJob = require("../modals/ProductionJobInbox");
const technicalJob = require("../modals/TechnicalJobInbox");
const { sendMail } = require("./SendMail");
const { sendMailWithPDF } = require("./SendMailWithPdf");

async function noResponse(update) {
  const content = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reason for Not Responding</title>
  </head>
  <body>
      <h1>Reason for Not Responding</h1>
      
      <p>Our Tieups are not</p>
  
      <p>If you would like to provide feedback, please <a href="/feedback">click here</a>.</p>
  </body>
  </html>`;
  sendMail(update.email, "status Update : " + update.status, content);
  return;
}
const updateStatus = async (req, res) => {
  try {
    const { inboxId, inboxName, status } = req.body;

    let InboxModel;
    // Determine the appropriate Inbox model based on inboxName
    switch (inboxName) {
      case "carService":
        InboxModel = carService;
        break;
      case "bikeService":
        InboxModel = bikeService;
        break;
      case "carConsultation":
        InboxModel = carConsultation;
        break;
      case "bikeConsultation":
        InboxModel = bikeConsultation;
        break;
      case "ecuTuning":
        InboxModel = ecuTuning;
        break;
      case "joinRacing":
        InboxModel = joinRacing;
        break;
      case "ownershipReview":
        InboxModel = ownershipReview;
        break;
      case "productionJob":
        InboxModel = productionJob;
        break;
      case "technicalJob":
        InboxModel = technicalJob;
        break;
      default:
        return res.status(400).json({ message: "Invalid inboxName" });
    }
    const update = await InboxModel.findByIdAndUpdate(
      inboxId,
      { status: status },
      { new: true }
    );

    if (!update) {
      return res.status(404).json({ message: "Request not found" });
    }
    //console.log(update);
    if (status === "No Response") {
      noResponse(update);
    }
    return res.status(200).json(update);
  } catch (error) {
    console.error("Error updating tieup:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  updateStatus,
};
