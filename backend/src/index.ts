import express, { Request, Response} from 'express'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: '*'
}))

import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
import bodyParser from 'body-parser'
import routes from './routes'

app.use(bodyParser.json())
const port = 8081

const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors:{
        origin: '*'
    }
})

routes(app, io)

httpServer.listen(port, () => {
    console.log('Server is Running')
})


