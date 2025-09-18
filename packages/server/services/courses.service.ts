import type { ICourses } from '../models/courses.model'
import { CoursesRepository } from '../repositories/courses.repository'

export const CoursesService = {
  async getCourses() {
    return await CoursesRepository.getCourses()
  },

  async postCourse(course: Partial<ICourses>) {
    return await CoursesRepository.postCourse(course)
  },
}
