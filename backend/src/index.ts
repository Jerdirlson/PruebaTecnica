import express, { Request, Response} from 'express'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: '*'
}))

import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
import bodyParser from 'body-parser'

const port = 8081

const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors:{
        origin: '*'
    }
})



httpServer.listen(port, () => {
    console.log('Server is Running')
})


