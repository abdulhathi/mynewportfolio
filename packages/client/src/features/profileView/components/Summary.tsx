import SectionTitle from './SectionTitle'
import summaries from '../data/summary.json'
import ReactMarkdown from 'react-markdown'

interface SummaryProps {
  fontSize?: string
}
const Summary = ({ fontSize = '12' }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-1">
      <SectionTitle children="Summary" />
      <div className={`text-[${fontSize}px]`}>
        <ReactMarkdown>{summaries[1].summary}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Summary
