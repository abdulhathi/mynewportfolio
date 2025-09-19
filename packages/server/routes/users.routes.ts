import express from 'express'
import { UserController } from '../controller/user.controller'

const { postUser } = UserController
const router = express.Router()

router.route('/').post(postUser)

export default router
