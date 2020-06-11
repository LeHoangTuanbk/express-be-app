const { User } = require('../models')

const isDubUserInfo = async (req, res, next) => {
  const { email, username } = data.body
  const { cardId } = req.params

  if (username) {
    const user = await User.findOne({
      where: {
        cardId,
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
        cardId,
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