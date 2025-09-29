import type { StrengthProps } from './Strength'
import Strength from './Strength'
import Divider from './Divider'

type StrengthsProps = {
  strengths: StrengthProps[]
}
const Strengths = ({ strengths }: StrengthsProps) => {
  return (
    <div className="flex flex-col gap-1">
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
