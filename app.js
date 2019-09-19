const express = require('express')
const app = express()

let staticMiddleware = express.static('public')
app.use(staticMiddleware)

app.set('view engine', 'ejs') // Embedded JS

app.get('/file-test', (req, res) => {
    res.sendFile(__dirname + '/public/test.html')
})

app.get('/view-test', (req, res) => {
    // We don't need the .ejs extention here.
    // Always put templates in /views
    res.render('view-test', {animal: "Whale"})
})

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {
    console.log('Server listening on ', app.get('port'))
})