const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query
        
        const [count] = await connection('incidents').count()
        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( (page - 1) * 5 )
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ])

        
        response.header('X-Total-Count', count['count(*)'])
        
        return response.json(incidents)
    },

    async create(request, response) {
        const { title, description, value } = request.body
        const ong_id = request.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
<<<<<<< HEAD
        const ong_id = request.headers.authorization    
=======
        const ong_id = request.headers.authorization
>>>>>>> 3fd6861a3e7643e1e03d979c7a6e2fb65e4e2f6f

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection('incidents').where('id', id).delete()

        response.status(204).send()
    }
}