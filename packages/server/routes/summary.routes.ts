import express from 'express'
import { SummaryController } from '../controller/summary.controller'
import { AuthMiddleware } from '../middleware/auth.middleware'

const { getSummary, postSummary } = SummaryController

const router = express.Router()

router.route('/').get(getSummary).post(AuthMiddleware.authorize, postSummary)

export default router
