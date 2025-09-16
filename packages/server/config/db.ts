import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string)
    console.log(`Mongo DB connected ${conn.connection.host}`)
  } catch (err: any) {
    console.log(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
