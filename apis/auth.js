const express = require('express')
const { User } = require('../models')
var jwt = require('jsonwebtoken');

const router = express.Router()

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ where: {
    username,
    password,
    isAdmin: true
  }})

  if(user) {
    const jwt_obj = {
      exp: Math.floor(Date.now() / 1000) + process.env.JWT_EXPIRE_DAYS * 60 * 60,
      data: {
        username,
        password,
        isAdmin: true
      }
    }
  
    const token = jwt.sign(jwt_obj, process.env.JWT_PRIVATE_KEY)
    res.send({ token })
  }

  res.sendStatus(404)
})

module.exports = router
