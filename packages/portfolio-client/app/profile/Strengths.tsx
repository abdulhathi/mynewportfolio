import React from 'react'
import type { StrengthProps } from './Strength'
import Strength from './Strength'

type StrengthsProps = {
  strengths: StrengthProps[]
}
const Strengths = ({ strengths }: StrengthsProps) => {
  return (
    <div className="flex flex-col gap-1">
      {strengths.map((strength, index) => (
        <div key={index} className="flex flex-col gap-0">
          <Strength {...strength} />
          {index < strengths.length - 1 && <div className="h-0.25 w-full bg-gray-200"></div>}
        </div>
      ))}
    </div>
  )
}

export default Strengths
