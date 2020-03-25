const express = require('express')

const routes = express.Router()
const users = []

routes.post('/users/add', (request, response) => {
    const body = request.body
    users.push(body)
    console.log(body)
    response.send(body.name + " foi adicionado.")
})

routes.get('/users', (request, response) => response.send(users))

routes.delete('/users/delete', (request, response) => {
    users.forEach((user) => {
        if (user.name === request.query.name) {
            const indice = users.indexOf(user)
            return response.send(users.splice(indice, 1))
        }
    })
    return response.send('Usuário não encontrado.')
})

module.exports = routes