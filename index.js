const express = require('express')
const { Person } = require('./models')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/api/person', async (req, res) => {
  try {
    const persons = await Person.findAll()
    res.send(persons)
  } catch (error) {
    res.send(500)    
  }  
})

app.get('/api/person/:id', async (req, res) => {
  const { id } = req.params

  const person = await Person.findByPk(id)
  const { name, username } = person

  res.send({ name, username })
})

app.post('/api/person' ,async (req, res) => {
  // const { name, username, password, idCard, isAdmin, role } = req.body
  try {
    const person = await Person.create(req.body)
    res.send(person)
  } catch (error) {
    res.send(500)
  }
})

app.put('/api/person/:id', async (req, res) => {
  const { id } = req.params
  const { name, username, password, idCard, isAdmin, role } = req.body
  const person = await Person.findByPk(id)

  if(!person) {
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

app.delete('/api/person/:id', async (req, res) => {
  const { id } = req.params
  const person = await Person.findByPk(id)

  if (person) {
    await person.destroy()
    res.send(200)
  } else {
    res.send(404)
  }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
