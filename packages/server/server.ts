import express, { type Application } from 'express'
import dotenv from 'dotenv'
import summaryRouter from './routes/summary.routes'
import skillsRouter from './routes/skills.routes'
import usersRouter from './routes/users.routes'
import authRouter from './routes/auth.routes'
import cors from 'cors'
import config from 'config'
import connectDB from './db'

dotenv.config()
if (!config.get<string>('jwt.secret')) {
  console.error('FATEL ERROR: jwtPrivateKey is not defined.')
  // * We can to process exit with 1 if any error. 0 means success
  process.exit(1)
}

connectDB()

const app: Application = express()

// ^ Notice the subtle detail: there is a trailing slash / in the header value. Browsers treat 'http://localhost:5173' and 'http://localhost:5173/' as different origins, so CORS fails.
app.use(
  cors({
    origin: 'http://localhost:80', // your React dev server
    credentials: true, // if you send cookies or auth headers
  })
)
app.use(express.json())

// Routes
app.use('/api/summary', summaryRouter)
app.use('/api/skills', skillsRouter)
app.use('/api/users', usersRouter)
app.use('/api/authenticate', authRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
