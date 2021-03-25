const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get('/keg-levels', function(req, res) {

    var response = [
        { "name" : "Test1",
          "levelPercentage" : 80 },
        { "name" : "Test2",
          "levelPercentage" : 30 },
    ];
    
    res.status(200)
    res.send(response)
})

app.listen(3000)