import express from 'express'
import { SkillsController } from '../controller/skills.controller'

const { getSkills } = SkillsController

const router = express.Router()

router.route('/').get(getSkills)

export default router
