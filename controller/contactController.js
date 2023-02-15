const Contact = require("../models/contact")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.saveContact = catchAsyncErrors(async (req,res) => {
    const {email, name, des} = req.body

    console.log(email, name, des)


        const contact = await Contact.create({
            name,
            email,
            des
        })
        res.status(200).send({contact})

})