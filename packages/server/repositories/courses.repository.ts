import Courses, { type ICourses } from '../models/courses.model'

export const CoursesRepository = {
  async getCourses() {
    return await Courses.find()
  },

  async postCourse(course: Partial<ICourses>) {
    return await Courses.create(course)
  },
}
