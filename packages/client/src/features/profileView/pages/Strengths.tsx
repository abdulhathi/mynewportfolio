import Divider from '../../../components/Divider'
import SectionTitle from '../components/SectionTitle'
import Strength from '../components/Strength'
import strengths from '../data/strengths.json'

const Strengths = () => {
  return (
    <div className="flex flex-col gap-1">
      <SectionTitle children="Strengths" />
      {strengths.map((strength, index) => (
        <div key={index} className="flex flex-col gap-0">
          <Strength {...strength} />
          {index < strengths.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  )
}

export default Strengths
