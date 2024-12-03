//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express()
const port = 3000
let clientInput = ""
let password = "ILoveProgramming"
let flag = false

function passCheck(req, res, next) {
    clientInput = req.body["password"]
    console.log(clientInput)
    if(clientInput === password) flag = true
    next()
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(passCheck)

app.post('/check', (req, res) => {
    if(flag) {
        res.sendFile(__dirname + "/public/secret.html")
    } else res.redirect('/')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})
