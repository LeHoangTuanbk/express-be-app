const express = require('express')
const { User } = require('../models')
const { authCheck } = require('../middwares/me')

const router = express.Router()

router.get('/', authCheck(), async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

router.get('/:cardId', authCheck(), async (req, res) => {
    const { cardId } = req.params

    const user = await User.findByPk(cardId)

    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.post('/', authCheck(), async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})

router.put('/:cardId', authCheck(), async (req, res) => {
    const { cardId } = req.params
    const { name, username, password, isAdmin } = req.body
    const user = await User.findByPk(cardId)

    if (!user) {
        res.send(404)
    }

    user.name = name
    user.username = username
    user.password = password
    user.idCard = idCard
    user.isAdmin = isAdmin

    await User.save()
    res.send(user)
})


router.delete('/:cardId', authCheck(), async (req, res) => {
    const { cardId } = req.params
    const user = await User.findByPk(cardId)

    if (user) {
        await user.destroy()
        res.send(200)
    } else {
        res.send(404)
    }
})

module.exports = router
