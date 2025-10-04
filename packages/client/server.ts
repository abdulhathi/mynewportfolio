import express, { type Request, type Response } from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = import.meta.dirname

// Serve static files from React build
console.log(path.join(__dirname, 'dist', 'index.html'))
app.use(express.static(path.join(__dirname, 'dist')))

// // Fallback for React Router
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`React app running on port ${PORT}`)
})
