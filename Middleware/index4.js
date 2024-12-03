import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))
import bodyParser from "body-parser"


const app = express()
const port = 3000
let bandName = ""

function bandNameGenerator(req, res, next) {
  console.log(req.body)
  bandName = req.body["street"] + req.body["pet"]
  next()
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bandNameGenerator)

app.post("/submit", (req, res) => {
  res.send("<h1>Band Name is : </h1><h2>"+ bandName + "</h2>")
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
