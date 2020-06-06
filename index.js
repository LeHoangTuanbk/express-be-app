const express = require('express')
const bodyParser = require('body-parser')

const user = require('./apis/user')
const auth = require('./apis/auth')
const me = require('./apis/me')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.use('/auth', auth)
app.use('/me', me)
app.use('/user', user)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
