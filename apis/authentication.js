const express = require('express')
const { Person } = require('../models')

const router = express.Router()

router.post('/', async (req, res) => {
  const { username, password } = req.body

  const person = await Person.findOne({ where: {
    username,
    password,
    isAdmin: true
  }})

  if(person) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
  } else {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain');
  }

  res.send()
})

module.exports = router
