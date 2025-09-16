import type { Summary } from '../types/summary'
import http from './httpClient'

export const getSummaries = async (): Promise<Summary[]> => {
  const { data } = await http.get('/summary')
  return data
}
