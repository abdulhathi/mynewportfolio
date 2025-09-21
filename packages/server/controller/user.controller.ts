import type { NextFunction, Request, Response } from 'express'
import type { IUser } from '../models/user.model'
import { UserService } from '../services/user.service'
import { z, ZodError, type ZodSafeParseResult } from 'zod'
import lodash from 'lodash'
import bcrypt from 'bcrypt'

const validateUser = (user: Partial<IUser>): ZodSafeParseResult<any> => {
  const userSchema = z.object({
    name: z.string('Name is required').min(5, 'User name minimum length should be 5 charecters.'),
    email: z.email({ message: 'Please enter a valid email' }).min(5, 'Email minimum length should be 5 charecters.'),
    password: z
      .string('Password is required.')
      .min(8, 'Password must be at least 8 characters')
      .max(128, 'Password must be at most 128 characters')
      .refine((val) => /[A-Z]/.test(val), 'Must include at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), 'Must include at least one lowercase letter')
      .refine((val) => /[0-9]/.test(val), 'Must include at least one number')
      .refine((val) => /[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]/.test(val), 'Must include at least one special character')
      .refine((val) => !/\s/.test(val), 'Must not contain spaces'),
  })
  return userSchema.safeParse(user)
}

export const UserController = {
  async postUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUser = req.body
      const validationResult = validateUser(user)
      if (!validationResult.success) {
        const errors: ZodError[] = JSON.parse(validationResult.error.message)
        const errorMesssages = errors.map((error) => error.message)
        res.status(400).send(errorMesssages)
        return
      }

      if (user.email) {
        const existingUser = await UserService.findUser(user.email)
        if (existingUser) {
          res.status(400).send('User already registered.')
          return
        }
      }

      // * Using bcrypt to hash the password
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(user.password, salt)
      user.password = hashPassword

      const createdUser = await UserService.postUser(user)
      // * Getting the auth token from user module itself
      const token = createdUser.genAuthToken()
      res.header('x-auth-token', token).send(lodash.pick(createdUser, ['_id', 'name', 'email']))
    } catch (error: any) {
      next(error)
    }
  },

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.body
      const existingUser = await UserService.findUserById(_id)
      res.send(existingUser)
    } catch (error: any) {
      next(error)
    }
  },
}
