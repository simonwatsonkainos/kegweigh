const express = require("express")
const bodyParser = require("body-parser")
const nunjucks = require("nunjucks")

const app = express()

app.use(bodyParser.json())
nunjucks.configure('views', {
    autoescape : true,
    express: app
})

const levels = []

app.get('/keg-levels', function(req, res) {
    console.log(levels.length)
    res.render('keg-levels.html', { levels : levels} )
})

app.post('/keg-levels', function(req, res) {
    console.log(req.body)
    levels.push(req.body)
    res.status(200)
    res.send()
})

app.listen(3000)