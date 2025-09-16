import Markdown from 'react-markdown'

interface SummaryCardProps {
  summary: string
}

const SummaryCard = ({ summary }: SummaryCardProps) => {
  return <Markdown>{summary}</Markdown>
}

export default SummaryCard
