const nodemailer = require("nodemailer")
const appPassword = process.env.APP_PASS
const email = process.env.EMAIL

class Controller {
    static showHome(_, res) {
        res.render("HomePage")
    }
    static async submitForm(req,res) {
        const {recipients, subject, message} = req.body
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: email,
                    pass: appPassword
                }
            })

            const mailOptions = {
                from: email,
                to: recipients,
                subject: subject,
                text: message
            }

            await transporter.sendMail(mailOptions)
            res.render("EmailSent")
        } catch (error) {
            res.send(error)
        }
    }    
}

module.exports = Controller