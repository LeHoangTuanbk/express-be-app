const express = require('express')
const { User } = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
        const users = await User.findAll()
        res.send(users)
})

router.get('/:cardId', async (req, res) => {
    const { cardId } = req.params

    const user = await User.findByPk(cardId)

    if(user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.post('/', async (req, res) => {
        const user = await User.create(req.body)
        res.send(user)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, username, password, cardId, isAdmin } = req.body
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


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (user) {
        await user.destroy()
        res.send(200)
    } else {
        res.send(404)
    }
})

module.exports = router
