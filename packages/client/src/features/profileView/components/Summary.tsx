import SectionTitle from './SectionTitle'
import Markdown from 'react-markdown'
import summaries from '../data/summary.json'

const Summary = () => {
  return (
    <div className="flex flex-col gap-1">
      <SectionTitle children="Summary" />
      <div className="text-[12px]">
        {summaries.map(({ summary, display }, index) => display && <Markdown key={index}>{summary}</Markdown>)}
      </div>
    </div>
  )
}

export default Summary
