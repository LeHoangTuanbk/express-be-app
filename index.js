const express = require('express')
const bodyParser = require('body-parser')

const user = require('./apis/user')
const auth = require('./apis/auth')
const me = require('./apis/me')
const activity = require('./apis/activity')

const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server);


const port = process.env.PORT || 3000

require('dotenv').config()

require('./io')(io)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth)
app.use('/me', me)
app.use('/user', user)
app.use('/activity', activity)

//server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
server.listen(port, () => console.log(`App listening at: ${port}`))
