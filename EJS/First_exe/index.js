import express from 'express'
import ejs from 'ejs'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const day = new Date().getDay()
    let type = "a weekday"
    let adv = "it's time to work hard"

    if(day === 0 || day === 6){
        type = "the weekend"
        adv = "it's time to have some fun"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})