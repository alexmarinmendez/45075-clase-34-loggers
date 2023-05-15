import express from 'express'
import log4js from 'log4js'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

log4js.configure({
    appenders: {
        console: { type: "console" },
        debugFile: { type: "file", filename: './debug.log'}
    },
    categories: {
        default: {
            appenders: ["console"], level: "all"
        },
        DEV: {
            appenders: ["console"], level: "all"
        },
        PROD: {
            appenders: ["debugFile"], level: "all"
        }
    }
})

const logger = log4js.getLogger(process.env.ENVIRONMENT)

app.get('/login', (req, res) => {
    const { username, password } = req.query
    if (!username) {
        logger.error('No se envió un username')
        return res.send('KO')
    }
    res.send('Ok')
})

app.listen(8080, () => console.log('Server Up'))



