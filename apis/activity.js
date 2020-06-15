const express = require('express')
const { Activity, User } = require('../models')
const { checkAdmin } = require('../middwares/auth')

const router = express.Router()

router.get('/', checkAdmin, async (req, res) => {
  Activity.belongsTo(User, { foreignKey: 'cardId' })

  const activities = await Activity.findAll({ include: [User] })

  res.send(activities)
})

router.get('/:cardId', checkAdmin, async (req, res) => {
  const { cardId } = req.params

  const users = await User.findByPk(cardId, { raw: true })

  const activities = await Activity.findAll({ where: {
    cardId
  }, raw: true })

  res.send({
    ...users,
    activities
  })
})

module.exports = router
