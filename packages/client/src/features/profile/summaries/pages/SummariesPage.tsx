import SummaryCard from '../components/SummaryCard'
import { useSummaries } from '../hooks/useSummaries'

const SummariesPage = () => {
  const { data: summaries, isLoading, isError } = useSummaries()
  if (isLoading) return <p>Loading Summaries</p>
  if (isError) return <p>Failed to load summaries</p>
  return (
    <>
      {summaries?.map(({ summary }, index) => (
        <SummaryCard key={index} summary={summary} />
      ))}
    </>
  )
}

export default SummariesPage
