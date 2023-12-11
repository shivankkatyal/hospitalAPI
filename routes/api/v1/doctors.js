const router = require("express").Router();
const doctorController = require("../../../controllers/doctor_controller");
const Doctor = require("../../../models/doctor");

router.get("/", async (req, res) => {
  const doctor = await Doctor.find({});

  return res.json({
    doctor,
  });
});

router.post("/register", doctorController.register);

router.get("/login", doctorController.login);

module.exports = router;