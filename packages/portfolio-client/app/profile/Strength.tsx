import React from 'react'
import { FaBlackTie, FaCloud } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiStrong } from 'react-icons/gi'
import { TbApi } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

export type StrengthProps = {
  name: string
  description: string
  icon: string
}
const iconMap: { [key: string]: React.ReactNode } = {
  strong: <GiStrong />,
  vscode: <VscVscode />,
  cloud: <FaCloud />,
  api: <TbApi />,
  scrum: <FaBlackTie />,
  leadership: <FaPeopleGroup />
}

const Strength = ({ name, description, icon }: StrengthProps) => {
  return (
    <div className="flex flex-row content-center gap-1">
      <div className="text-blue-600">{iconMap[icon] || null}</div>
      <div className="flex flex-col gap-1 text-[12px]">
        <p className='font-medium'>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Strength
