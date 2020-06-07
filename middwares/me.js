const express = require('express')
const app = express()

const authCheck = () => (req, res, next) => {
  const { token } = req.header('Bearer')

  if(!token) {
    res.status(401).send('Unauthorize')
  }

  try {
    const payload = await jwt.decode(token, process.env.JWT_PRIVATE_KEY)
    const { data } = payload

    const user = await User.findOne({ 
      where: data
    })

    if (user)
      next()
    else 
      res.status(401).send('Unauthorize')
  } catch (error) {
    res.status(401).send('Unauthorize')
  }
}

module.exports = { authCheck }