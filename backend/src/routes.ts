import { Server } from "socket.io";
import { Express, Request, Response } from "express";

export default (app: Express, io: Server) => {

    app.post('/todo', async (req: Request, res: Response) => {
        console.log(req.body)
        res.send()
    })


    app.post('/todo/delete', async (req: Request, res: Response) => {

        res.send()
    })

    app.get('/todo', async (req: Request, res: Response) => {

        res.send('hola')
    })



}