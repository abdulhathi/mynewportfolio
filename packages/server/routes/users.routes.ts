import express from 'express'
import { UserController } from '../controller/user.controller'
import { AuthMiddleware } from '../middleware/auth.middleware'

const { getUser, postUser } = UserController
const router = express.Router()

router.route('/me').get(AuthMiddleware.authorize, getUser)
router.route('/').post(postUser)

export default router
