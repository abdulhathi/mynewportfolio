// import portfolioPhoto from '../../../assets/profile_photo.jpeg'
import Headline from '../../../components/Headline'
import { FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdAlternateEmail, MdAssuredWorkload } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'
import { FaLocationDot } from 'react-icons/fa6'

const ProfileHeader = () => {
  const headlines = ['Senior Application Engineer', 'Technical Architect', 'Full-Stack Leader', 'AI/ML & Cloud Innovator']
  return (
    <div className="flex flex-row place-content-between  text-white">
      <div className="flex flex-col gap-1">
        <p className="text-[30px] uppercase font-medium p-0 m-0 leading-5">Abdul Hathi Mohamed Hussain</p>
        <div className="flex gap-2 leading-5">
          {headlines.map((headline, index) => (
            <div className="flex gap-1" key={index}>
              <Headline>{headline}</Headline>
              <Headline>{index + 1 === headlines.length ? '' : '|'}</Headline>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-3 leading-5 text-[11px]">
            <div className="flex gap-1 items-center">
              <FaPhone className="text-[#458EF7]" />
              <p className="font-medium">+1-(562)-606-8314</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdAlternateEmail className="text-[#458EF7]" />
              <a className="font-medium" href="mailto:abdulhathi@gmail.com">
                abdulhathi@gmail.com
              </a>
            </div>
            <div className="flex gap-1 items-center">
              <FaLinkedin className="text-[#458EF7]" />
              <a className="font-medium" href="https://www.linkedin.com/in/abdulhathi/">
                https://www.linkedin.com/in/abdulhathi/
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-3 leading-5 text-[11px]">
            <div className="flex gap-1 items-center">
              <SiLeetcode className="text-[#458EF7]" />
              <a className="font-medium" href="https://leetcode.com/u/abdulhathi/">
                https://leetcode.com/u/abdulhathi/
              </a>
            </div>
            <div className="flex gap-1 items-center font-medium">
              <FaLocationDot className="text-[#458EF7]" />
              28 Hayes Street, Irvine, CA - 92620
            </div>
          </div>
          <div className="flex text-[11px] gap-1 items-center font-medium">
            <div className="flex flex-row gap-1 items-center bg-green-600 text-white rounded-[2px] px-1 leading-4">
              <MdAssuredWorkload />
              <div className="text-[12px] text-white">Work Authorization</div>
            </div>
            Authorized to work in the U.S. (GC-EAD valid through July 2030)
          </div>
        </div>
      </div>
      {/* <img width={120} className="rounded-full"></img> */}
    </div>
  )
}

export default ProfileHeader
