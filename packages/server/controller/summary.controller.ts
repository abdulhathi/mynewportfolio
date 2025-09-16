import type { Request, Response, NextFunction } from 'express'
import { SummaryServices } from '../services/summary.services'
import type { ISummary } from '../models/summary.model'

export const SummaryController = {
  async getSummary(req: Request, res: Response, next: NextFunction) {
    try {
      const summary: ISummary[] = await SummaryServices.getSummary()
      res.send(summary)
    } catch (error: any) {
      next(error)
    }
  },

  async postSummary(req: Request, res: Response, next: NextFunction) {
    try {
      const summary: Partial<ISummary> = req.body
      const newSummary = await SummaryServices.postSummary(summary)
      res.status(201).send(newSummary)
    } catch (error: any) {
      next(error)
    }
  },
}
