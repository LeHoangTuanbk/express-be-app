const express = require('express')
const bodyParser = require('body-parser')
var path = require('path');

const person = require('./apis/person')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/api/person', person)

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/index.html'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
