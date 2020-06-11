const { User } = require('../models')

const isDubUserInfo = async (req, res, next) => {
  const { email, username, cardId } = req.body

  let user = null

  user = await User.findOne({
    where: {
      username,
    }
  })

  if (user) {
    res.status(400).send({ code: 'username-dub' })
  }

  user = await User.findOne({
    where: {
      email
    }
  })

  if (user) {
    res.status(400).send({ code: 'email-dub' })
  }

  user = await User.findByPk(cardId)

  if (user) {
    res.status(400).send({ code: 'card-dub' })
  }

  next()
}

module.exports = { isDubUserInfo }