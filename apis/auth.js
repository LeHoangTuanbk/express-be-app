const express = require('express')
const { User } = require('../models')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ where: {
    username,
    password,
    isAdmin: true
  }})
  if(user)
    res.send(user)

  res.sendStatus(404)
})

module.exports = router
