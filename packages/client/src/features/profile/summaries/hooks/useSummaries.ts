import { useQuery } from '@tanstack/react-query'
import { getSummaries } from '../../../../api/summariesService'
import type { Summary } from '../../../../types/summary'

export const useSummaries = () => useQuery<Summary[]>({ queryKey: ['summary'], queryFn: getSummaries })
