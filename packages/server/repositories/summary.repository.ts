import Summary, { type ISummary } from '../models/summary.model'

export const SummaryRepository = {
  async getSummary() {
    const summary: ISummary[] = await Summary.find()
    return summary
  },
  async postSummary(summary: Partial<ISummary>): Promise<ISummary | null> {
    const newSummary = new Summary(summary)
    return newSummary.save()
  },
}
