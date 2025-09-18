import type { NextFunction, Request, Response } from 'express'
import { CoursesService } from '../services/courses.service'
import type { ICourses } from '../models/courses.model'

export const CoursesController = {
  async getCourses(req: Request, res: Response, next: NextFunction) {
    try {
      const courses: ICourses[] = await CoursesService.getCourses()
      res.send(courses)
    } catch (error: any) {
      next(error)
    }
  },

  async postCourse(req: Request, res: Response, next: NextFunction) {
    try {
      const course: Partial<ICourses> = req.body
      await CoursesService.postCourse(course)
    } catch (error: any) {
      next(error)
    }
  },
}
