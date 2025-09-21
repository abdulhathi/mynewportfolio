import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'

export const AuthMiddleware = {
  authorize(req: Request, res: Response, next: NextFunction) {
    const authToken = req.header('x-auth-token')
    if (!authToken) return res.status(401).send('Access denied. No token provided')

    try {
      const payload = jwt.verify(authToken, config.get<string>('jwt.secret'))
      req.body = payload
      next()
    } catch (error: any) {
      res.status(400).send('Invalid token.')
    }
  },
}
