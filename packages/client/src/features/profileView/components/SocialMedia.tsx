import { FaLinkedin } from 'react-icons/fa'
import { SiCoursera, SiCredly, SiGravatar, SiLeetcode } from 'react-icons/si'
import Headline from '../../../components/Headline'
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
      <FaLinkedin className="text-[#2D65BC] text-[10px]" />
    ) : icon === 'SiLeetcode' ? (
      <SiLeetcode className="text-[#F2A640] text-[10px]" />
    ) : icon === 'FaSquareGithub' ? (
      <FaSquareGithub className="text-gray-700 text-[10px]" />
    ) : icon === 'SiCredly' ? (
      <SiCredly className="text-[#ED742E] text-[10px]" />
    ) : icon === 'SiCoursera' ? (
      <SiCoursera className="text-gray-700 text-[10px]" />
    ) : icon === 'SiGravatar' ? (
      <SiGravatar className="text-gray-700 text-[10px]" />
    ) : (
      <BsFillBriefcaseFill className="text-gray-700 text-[10px]" />
    )
  return (
    <div className="flex items-center gap-1">
      {faIcon}
      <a href={link}>
        <Headline fontSize='12'>{name}</Headline>
      </a>
    </div>
  )
}

export default SocialMedia
