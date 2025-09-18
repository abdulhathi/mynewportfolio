import type { NextFunction, Request, Response } from 'express'
import { CertificationsService } from '../services/certifications.service'
import type { ICertifications } from '../models/certifications.model'

export const CertificationsController = {
  async getCertifications(req: Request, res: Response, next: NextFunction) {
    try {
      const certifications: ICertifications[] = await CertificationsService.getCertifications()
      res.send(certifications)
    } catch (error: any) {
      next(error)
    }
  },
}
