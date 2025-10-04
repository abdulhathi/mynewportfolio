import { BiNetworkChart } from 'react-icons/bi'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiStrong } from 'react-icons/gi'
import { GrCycle } from 'react-icons/gr'
import { TbCloudComputing } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { AiOutlineRobot } from 'react-icons/ai'

export type StrengthProps = {
  name: string
  description: string
  icon: string
}
const iconMap: { [key: string]: React.ReactNode } = {
  strong: <GiStrong />,
  vscode: <VscVscode />,
  cloud: <TbCloudComputing />,
  api: <BiNetworkChart />,
  scrum: <GrCycle />,
  leadership: <FaPeopleGroup />,
  ai: <AiOutlineRobot />,
}

const Strength = ({ name, description, icon }: StrengthProps) => {
  return (
    <div className="flex flex-row content-center gap-1">
      <div className="text-[#458EF7] pt-0.5">{iconMap[icon] || null}</div>
      <div className="flex flex-col gap-1 text-[12px]">
        <p className="font-medium">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Strength
