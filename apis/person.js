const express = require('express')
const { Person } = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
        const persons = await Person.findAll()
        res.send(persons)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const person = await Person.findByPk(id)
    const { name, username } = person

    res.send({ name, username })
})

router.post('/', async (req, res) => {
    // const { name, username, password, idCard, isAdmin, role } = req.body
    try {
        const person = await Person.create(req.body)
        res.send(person)
    } catch (error) {
        res.send(500)
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, username, password, idCard, isAdmin, role } = req.body
    const person = await Person.findByPk(id)

    if (!person) {
        res.send(404)
    }

    person.name = name
    person.username = username
    person.password = password
    person.idCard = idCard
    person.isAdmin = isAdmin
    person.role = role

    await person.save()
    res.send(person)
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const person = await Person.findByPk(id)

    if (person) {
        await person.destroy()
        res.send(200)
    } else {
        res.send(404)
    }
})

module.exports = router
