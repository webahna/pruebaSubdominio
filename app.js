import express from 'express'
import vhost from 'vhost'
import subdominio from './Webs/subdominio.js'

import router from './Routes/Router.js'

const app = express()

//Habilitamos el subdominoio
app.use(vhost('admin.localhost', subdominio))

// Habilitamos el dominio principal
app.use('/', router)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Servidor listo en el puerto ', PORT)
})