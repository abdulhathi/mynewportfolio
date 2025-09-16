import mongoose from 'mongoose'

mongoose
  .connect('mongodb+srv://abdulhathi_db_user:fF8ESWCeQHRmjD1D@portfolio-cluster.mart1ws.mongodb.net/')
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err))

