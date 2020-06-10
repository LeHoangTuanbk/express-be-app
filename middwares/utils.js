const { User } = require('../models')

const isDubUserInfo = async (req, res, next) => {
  const { email, username } = data.body

  if (username) {
    const user = await User.findOne({
      where: {
        username,
      }
    })

    if (user) {
      res.status(400).send({ code: 'username-dub' })
    }
  }

  if (email) {
    const user = await User.findOne({
      where: {
        email,
      }
    })

    if (user) {
      res.status(400).send({ code: 'email-dub' })
    }
  }

  next()
}

module.exports = { isDubUserInfo }