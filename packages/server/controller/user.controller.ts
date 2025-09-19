import type { NextFunction, Request, Response } from 'express'
import type { IUser } from '../models/user.model'
import { UserService } from '../services/user.service'
import { z, ZodError, type ZodSafeParseResult } from 'zod'
import lodash from 'lodash'

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
      const user: Partial<IUser> = req.body
      const validationResult = validateUser(user)
      if (!validationResult.success) {
        const errors: ZodError[] = JSON.parse(validationResult.error.message)
        const errorMesssages = errors.map((error) => error.message)
        // console.log(errorMesssages)
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

      const createdUser = await UserService.postUser(user)
      res.send(lodash.pick(createdUser, ['_id', 'name', 'email']))
    } catch (error: any) {
      next(error)
    }
  },
}
