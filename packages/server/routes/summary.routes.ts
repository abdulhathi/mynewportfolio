import express from 'express'
import { SummaryController } from '../controller/summary.controller'

const { getSummary, postSummary } = SummaryController

const router = express.Router()

router.route('/').get(getSummary).post(postSummary)

export default router
