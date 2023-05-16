import winston from 'winston'

const createLogger = (env) => {
    if (env === 'PROD') {
        return winston.createLogger({
            transports: [
                new winston.transports.File({ filename: './winston.log', level: 'http'})
            ]
        }) 
    } else {
        return winston.createLogger({
            transports: [
                new winston.transports.Console({ level: 'http' })
            ]
        })
    }
}

export default createLogger