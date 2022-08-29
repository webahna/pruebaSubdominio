import express from 'express'

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Pagina de inicio')
})

router.use((req,res) => {
    res.status(404).send('Pagina no encontrada')
})

export default router