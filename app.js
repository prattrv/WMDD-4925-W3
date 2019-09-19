const express = require('express')
const app = express()

let staticMiddleware = express.static('public')
app.use(staticMiddleware)

app.get('/file-test', (req, res) => {
    res.sendFile(__dirname + '/public/test.html')
})

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {
    console.log('Server listening on ', app.get('port'))
})