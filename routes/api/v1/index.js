const router = require("express").Router();

// doctors router
router.use("/doctors", require("./doctors"));

// patients router
router.use("/patients", require("./patients"));

// reports
router.use("/reports", require("./reports"));

module.exports = router;