import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { contactRoutes } from './app/modules/contacts/contacts.route'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1/contacts', contactRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Welcome to Mongoose Express CRUD Mastery',
  })
})

export default app
