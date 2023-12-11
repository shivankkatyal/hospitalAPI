const router = require("express").Router();

const reportContoller = require("../../../controllers/report_controller");
const Report = require("../../../models/report");

router.get("/", async (req, res) => {
  console.log("patients get");
  const patient = await Report.find({});

  return res.json({ message: "patients get all report", patient });
});

router.get("/:status", reportContoller.status);

module.exports = router;