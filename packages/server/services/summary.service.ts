import type { ISummary } from '../models/summary.model'
import { SummaryRepository } from '../repositories/summary.repository'

export const SummaryService = {
  async getSummary() {
    return await SummaryRepository.getSummary()
  },

  async postSummary(summary: Partial<ISummary>): Promise<ISummary | null> {
    return await SummaryRepository.postSummary(summary)
  },
}
