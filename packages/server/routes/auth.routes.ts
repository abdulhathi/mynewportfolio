import express from 'express'
import { AuthController } from '../controller/auth.controller'

const { authenticateUser } = AuthController

const router = express.Router()

router.route('/').post(authenticateUser)

export default router