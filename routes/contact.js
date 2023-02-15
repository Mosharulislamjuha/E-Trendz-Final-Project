const express = require("express")
const router = express.Router();

const {saveContact} = require("../controller/contactController")

router.route("/contactSave").post(saveContact)

module.exports = router;