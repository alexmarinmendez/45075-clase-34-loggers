import express from 'express'
import createLogger from './utils.js'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

const logger = createLogger(process.env.ENVIRONMENT)

app.use((req, res, next) => {
    req.logger = logger
    req.logger.http('info', `${req.method} at ${req.path}`)
    next()
})

app.get('/login', (req, res) => {
    const { username, password } = req.query
    if (!username) {
        // logger.error('No se envió un username')
        return res.send('KO')
    }
    res.send('Ok')
})

app.listen(8080, () => console.log('Server Up'))



