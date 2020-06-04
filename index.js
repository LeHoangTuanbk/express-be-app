const express = require('express')
const bodyParser = require('body-parser')

const person = require('./apis/person')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.use('/api/person', person)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
