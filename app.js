require("dotenv").config()

const Controller = require("./controllers/controller")

const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 3000

app.set("view engine","ejs")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", Controller.showHome)
app.post("/send-mail", Controller.submitForm)

app.listen(port, () => {
    console.log("Project running on port: " + port)
})