const express = require('express')

const app = express()
app.use(express.json())


var users = []

app.post('/users/add', (request, response) => {
    const body = request.body
    users.push(body)
    console.log(body)
    response.send(body.name + " foi adicionado.")
})

app.get('/users', (request, response) => response.send(users))

app.delete('/users/delete', (request, response) => {
    users.forEach((user) => {
        if (user.name === request.query.name) {
            const indice = users.indexOf(user)
            return response.send(users.splice(indice, 1))
        }
    })
    return response.send('Usuário não encontrado.')
})

app.listen(3333)
