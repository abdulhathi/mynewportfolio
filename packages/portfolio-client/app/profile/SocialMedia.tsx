import { FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Headline from './Headline'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaSquareGithub } from 'react-icons/fa6'

type SocialMediaProps = {
  name: string
  link: string
  icon: string
}

const SocialMedia = ({ name, link, icon }: SocialMediaProps) => {
  const faIcon =
    icon === 'FaLinkedin' ? (
      <FaLinkedin className="text-gray-700 w-3" />
    ) : icon === 'SiLeetcode' ? (
      <SiLeetcode className="text-gray-700 w-3" />
    ) : icon === 'FaSquareGithub' ? (
      <FaSquareGithub className="text-gray-700 w-3" />
    ) : (
      <BsFillBriefcaseFill className="text-gray-700 w-3" />
    )
  return (
    <div className="flex items-center gap-1">
      {faIcon}
      <a href={link}>
        <Headline fontSize={12}>{name}</Headline>
      </a>
    </div>
  )
}

export default SocialMedia
