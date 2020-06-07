const express = require('express')
const { User } = require('../models')
const { checkAdmin } = require('../middwares/auth')

const router = express.Router()

router.get('/', checkAdmin, async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

router.get('/:cardId', checkAdmin, async (req, res) => {
    const { cardId } = req.params

    const user = await User.findByPk(cardId)

    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.post('/', checkAdmin, async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})

router.put('/:cardId', checkAdmin, async (req, res) => {
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


router.delete('/:cardId', checkAdmin, async (req, res) => {
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
