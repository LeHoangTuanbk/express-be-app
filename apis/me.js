const express = require('express')
const { User } = require('../models')
var jwt = require('jsonwebtoken');

const router = express.Router()

router.get('/', async (req, res) => {
  const token = req.header('Bearer')

  try {
    const payload = await jwt.decode(token, process.env.JWT_PRIVATE_KEY)
    const { data } = payload

    const user = await User.findOne({ 
      where: data
    })

    if(user) {
      res.send(user)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    res.sendStatus(401)
  }
})

module.exports = router
