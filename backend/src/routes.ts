import { OkPacket } from 'mysql';
import { Server } from "socket.io";
import { Express, Request, Response } from "express";
import { DataBase, initDatabase } from "./db";

export default (app: Express, io: Server) => {

    app.post('/todo', async (req: Request, res: Response) => {
        const db: DataBase = await initDatabase(res)
        const query = `
            INSERT INTO todos (title, description, color) VALUES 
            (?, ?, ?)
        `
        const values = [
            req.body.title, req.body.description, req.body.color
        ]
        const response: OkPacket = await db.insertQuery(query, values)
        if(response.insertId > 0){
            res.status(200)
            res.json({
                id: response.insertId
            })
            // Socket
            const todo = {
                ...req.body,
                id: response.insertId,
                stage: 1
            }
            io.emit('newTodo', todo)
        }else {
            res.status(210)
            res.end()
        }
    })


    app.post('/todo/delete', async (req: Request, res: Response) => {
        const query = `
            DELETE FROM todos WHERE id = ? 
        `
        const values = [req.body.id]
        const db: DataBase = await initDatabase(res)
        const response: OkPacket = await db.updateQuery(query, values)
        if(response.affectedRows > 0){
            res.status(200)
            res.end()

            io.emit('deleteTodo', req.body.id)
        }else{
            res.end()
            res.status(204)
        }
    })

    app.post('/todo/next', async(req : Request, res : Response) =>{
        const query = ` UPDATE todos SET stage = stage + 1 WHERE id = ?`
        const values = [req.body.id]
        const db : DataBase = await initDatabase (res)
        const response : OkPacket = await db.updateQuery(query, values)
        if(response.affectedRows > 0){
            res.status(200)
            res.end()

            io.emit('nextStage', req.body.id)
        }else{
            res.end()
            res.status(204)
        }
    })

    app.get('/todo', async (req: Request, res: Response) => {
        const query = `
            SELECT * FROM todos
        `
        const db: DataBase = await initDatabase(res)
        const response = await db.readQuery(query, [])
        res.json(response)
    })

    app.get('/', (req: Request, res: Response) => {
        res.send('AllOk')
    })

}