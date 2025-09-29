import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect((process.env.MONGO_URI as string) || 'mongodb://mongo:27017')
    console.log(`Mongo DB connected ${conn.connection.host}`)
  } catch (err: any) {
    console.log(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
