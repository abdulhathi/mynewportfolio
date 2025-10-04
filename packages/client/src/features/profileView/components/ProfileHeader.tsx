import { FaPhone } from 'react-icons/fa'
import { MdAlternateEmail, MdAssuredWorkload } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import SocialMedias from '../pages/SocialMedias'

const ProfileHeader = () => {
  const headlines = ['Principal Architect | Senior Staff Engineer | Cloud & AI/ML | Full-Stack Leader']
  return (
    <div className="flex flex-col justify-start w-full gap-0.5">
      <div className="text-3xl uppercase font-semibold leading-6">Abdul Hathi Mohamed Hussain</div>
      <div className="flex gap-1 items-center">
        {headlines.map((headline, index) => (
          <div className="flex gap-1 items-center" key={index}>
            <div>{headline}</div>
            {index < headlines.length - 1 && <div className="text-[12px]">|</div>}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-6 text-[11px]">
        <div className="flex flex-row gap-1 items-center">
          <FaPhone className="text-[#458EF7] text-[10px]" />
          <p className="font-medium">562-606-8314</p>
        </div>
        <div className="flex gap-1 items-center">
          <MdAlternateEmail className="text-[#458EF7] text-[10px]" />
          <a className="font-medium" href="mailto:abdulhathi@gmail.com">
            abdulhathi@gmail.com
          </a>
        </div>
        <div className="flex gap-1 items-center font-medium">
          <FaLocationDot className="text-[#458EF7] text-[10px]" />
          28 Hayes Street, Irvine, CA - 92620
        </div>
      </div>
      <SocialMedias />
      <div className="flex text-[11px] gap-1 items-center font-medium">
        <div className="flex flex-row gap-1 items-center bg-green-600 text-white rounded-[2px] px-1">
          <MdAssuredWorkload />
          <div className="text-[12px] text-white">Work Authorization</div>
        </div>
        Authorized to work in the U.S. (GC-EAD valid through July 2030)
      </div>
    </div>
  )
}

export default ProfileHeader
