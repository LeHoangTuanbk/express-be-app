const express = require('express')

const { User } = require('../models')
const { checkAdmin } = require('../middwares/auth')
const { isDubUserInfo } = require('../middwares/utils')

const router = express.Router()

router.get('/', checkAdmin, async (req, res) => {
    const users = await User.findAll({ where: {
        status: true
    }})

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

router.post('/', [checkAdmin, isDubUserInfo], async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})

router.put('/:cardId', [checkAdmin], async (req, res) => {
    const { cardId } = req.params
    const { name, username, password, isAdmin, cardId: cardIdBody, email } = req.body

    let user = await User.findByPk(cardId, { raw: true })

    if (!user) {
        res.send(404)
    }

    user.name = name
    user.username = username
    user.password = password
    user.cardId = cardIdBody
    user.isAdmin = isAdmin
    user.email = email

    try {
        await User.update(user, {
            where: {
                cardId
            }
        })
        res.send(user)
    } catch (error) {
        // erro example: error = {
        //     errors: [
        //          {
        //           message: 'Users.PRIMARY must be unique',
        //           type: 'unique violation',
        //           path: 'Users.PRIMARY',
        //           value: '12345',
        //           origin: 'DB',
        //           instance: null,
        //           validatorKey: 'not_unique',
        //           validatorName: null,
        //           validatorArgs: []
        //         }
        //       ]
        // }
        console.log(error.errors[0]);
        res.status(400).send({ code: error.errors[0].path + '-' + error.errors[0].validatorKey })
    } finally {

        // if catch block have exeption
        res.status(500).send({ code: 'sever-error' })
    }
})


router.delete('/:cardId/deactive', checkAdmin, async (req, res) => {
    const { cardId } = req.params

    let user = await User.findByPk(cardId, { raw: true })

    if (!user) {
        res.send(404)
    }

    user.status = false

    try {
        await User.update(user, {
            where: {
                cardId
            }
        })
        res.send(user)
    } catch (error) {
        res.status(400).send({ code: error.errors[0].path + '-' + error.errors[0].validatorKey })
    } finally {
        res.status(500).send({ code: 'sever-error' })
    }

    res.status(200).send()
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
