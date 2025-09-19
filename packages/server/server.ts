import express, { type Application } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import summaryRouter from './routes/summary.routes'
import skillsRouter from './routes/skills.routes'
import usersRouter from './routes/users.routes'
import cors from 'cors'

dotenv.config()
connectDB()

const app: Application = express()

// ^ Notice the subtle detail: there is a trailing slash / in the header value. Browsers treat 'http://localhost:5173' and 'http://localhost:5173/' as different origins, so CORS fails.
app.use(
  cors({
    origin: 'http://localhost:5173', // your React dev server
    credentials: true, // if you send cookies or auth headers
  })
)
app.use(express.json())

// Routes
app.use('/api/summary', summaryRouter)
app.use('/api/skills', skillsRouter)
app.use('/api/users', usersRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
