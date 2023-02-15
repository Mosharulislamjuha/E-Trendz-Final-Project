const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter name"],
        maxLength: [30, "Your name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        require: [true, "Please enter email"],
        validate: [validator.isEmail, "please enter valid email"]
    },
    des: {
        type: String,
        require: [true, "Please enter email"],
    }
})

module.exports = mongoose.model("contact", contactSchema)