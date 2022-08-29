import express from 'express'


const subdominio = express.Router()

//Habilitamos lo que se obtendra al ingresar al subdominio
subdominio.get('/', (req, res) => {
    res.send('admin')
})

// Habilitamos una respuesta para la pagina no encontrada
subdominio.use((req,res) => {
    res.status(404).send('Pagina no encontrada')
})

export default subdominio