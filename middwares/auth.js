const jwt = require('jsonwebtoken');

const { User } = require('../models')

const checkAdmin = async (req, res, next) => {
  const token = req.header('Bearer')

  if (!token) {
    res.status(401).send('Unauthorize')
  }

  const payload = await jwt.verify(token, process.env.JWT_PRIVATE_KEY)

  const { data } = payload

  const user = await User.findOne({
    where: data
  })

  if (user)
    next()
  else
    res.status(401).send('Unauthorize')
}

module.exports = { checkAdmin }