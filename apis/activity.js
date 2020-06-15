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

  User.hasMany(Activity, {
    foreignKey: 'cardId'
  })

  Activity.belongsTo(User, {
    foreignKey: 'cardId'
  })

  const users = await User.findByPk(cardId, {
    raw: true,
    include: [{
      model: Activity,
      where: {
        cardId
      }
    }]
  })

  res.send(users)
})

module.exports = router
