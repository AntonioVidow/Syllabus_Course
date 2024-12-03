/*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer'
import qrImage from 'qr-image'
import fs from 'fs'

inquirer.prompt([
    {
        "message": "Type in your URL: ",
        "name": "URL"
    }
]).then((answers) => {
        const url = answers.URL
        let qr_svg = qrImage.image(url)
        qr_svg.pipe(fs.createWriteStream(url + '.png'))

        fs.writeFile("URL.txt", url, "utf-8", (err) => {
            if(err) throw err;
            console.log("The file has been successfully saved")
        })
    })
    .catch((error) => {
        console.error(error)
    });

