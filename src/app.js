import express from 'express'
import { addLogger } from './logger.js'

const app = express()
app.use(addLogger)

app.get('/', (req, res) => {
    req.logger.warn('Advertencia!!')
    res.send({ message: 'Hola Mundo!' })
})

app.listen(8080, () => console.log('Server Up'))



