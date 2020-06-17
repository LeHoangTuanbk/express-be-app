const express = require('express')
const http = require('http')

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

setResult = result => {
  return result;
}

router.post('/web', async (req, res) => { 
  const { cardId } = req.body
 
  const opt = {
    host: process.env.NODEMCU_HOST,
    path: '/unlock',
    port: '80',
    method: 'POST'
  }; 

  const MCUreq = http.request(opt, async response => {
    if(response && response.statusCode === 200) {
      const activity = await Activity.create({ cardId, unclock_date: new Date().toISOString(), type: "WEB" })
      res.send(activity)
    } else {
      res.send(400)
    }
  })

  MCUreq.write("")
  MCUreq.end()
})

module.exports = router
