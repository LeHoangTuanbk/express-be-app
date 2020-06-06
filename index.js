const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const person = require('./apis/person')
const auth = require('./apis/authentication')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/api/auth', auth)
app.use('/api/person', person)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/index.html'))
})

app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/logout.html'))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/dashboard/index.html'))
})

app.get('/dashboard/persons', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/dashboard/persons.html'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
