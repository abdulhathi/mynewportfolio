import { FaLinkedin, FaPhone } from 'react-icons/fa'
import Headline from './Headline'
import USLetterTemplate from './USLetterTemplate'
import './myprofile.css'
import { MdAlternateEmail, MdAssuredWorkload } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'
import { FaLocationDot } from 'react-icons/fa6'
import SectionTitle from './SectionTitle'
import Experience from './Experience'
import skills from './skills.json'
import SkillGroup from './SkillGroup'
import Project from './Project'
import profilePhoto from '../../../../public/images/profile_photo.jpg'
import Courses from './Courses'
import SocialMedia from './SocialMedia'
import Activities from './Activities'

import experiences from './experience.json'
import proejcts from './projects.json'
import socialMedia from './socialMedia.json'
import courses from './courses.json'
import certification from './certification.json'
import strengths from './strengths.json'
import summaries from './summary.json'
import Strengths from './Strengths'
import Markdown from 'react-markdown'
import { useReactToPrint } from 'react-to-print'
import { useRef, useState } from 'react'
import Divider from './Divider'

const MyProfile = () => {
  const headlines = ['Senior Application Engineer', 'Technical Architect', 'Full-Stack Leader', 'AI/ML Innovator']
  const profileRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1.5)
  const reactToPrint = useReactToPrint({
    contentRef: profileRef,
  })
  const handlePrint = () => {
    setScale(0.99)
    setTimeout(() => reactToPrint(), 0)
  }

  return (
    <div>
      <div className="flex flex-row gap-2 items-start">
        <button onClick={handlePrint} className="border px-2 rounded cursor-pointer">
          Print
        </button>
        <button className="border px-2 rounded cursor-pointer" onClick={() => setScale((s) => s + 0.1)}>
          +
        </button>
        <button className="border px-2 rounded cursor-pointer" onClick={() => setScale((s) => Math.max(1, s - 0.1))}>
          -
        </button>
      </div>
      <div
        ref={profileRef}
        id="content"
        className="flex flex-col items-center justify-center w-full profile-font-family"
        style={{ transform: `scale(${scale})`, transformOrigin: 'top' }}
      >
        <USLetterTemplate className="p-8">
          <div className="flex flex-col gap-0">
            <div className="flex flex-row place-content-between w-full">
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
                    Authorized to work in the U.S. (EAD valid through July 2030)
                  </div>
                </div>
              </div>
              <img src={profilePhoto} width={110} className="rounded-full"></img>
            </div>
            <div className="flex gap-4 w-full">
              <div className="w-[60%] flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <SectionTitle children="Summary" />
                  <div className="text-[12px] leading-4">
                    {summaries.map(({ summary }, index) => (
                      <Markdown key={index}>{summary}</Markdown>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SectionTitle children="Experience" />
                  <div className="flex flex-col leading-4">
                    {experiences.map(
                      ({ designation, companyName, dateFrom, dateTo, location, summaryPoints }, index) => (
                        <div key={index}>
                          <Experience
                            key={companyName}
                            designation={designation}
                            companyName={companyName}
                            dateFrom={dateFrom}
                            dateTo={dateTo}
                            location={location}
                            summaryPoints={summaryPoints}
                          />
                          {index < experiences.length - 1 && <Divider />}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[40%] flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <SectionTitle children="Skills" />
                  <div className="flex flex-col gap-0">
                    {skills.map(({ skillGroupTitle, skills }, index) => (
                      <div key={skillGroupTitle} className="leading-4.5">
                        <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} />
                        {index < skills.length - 1 && <Divider />}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SectionTitle children="Projects" />
                  <div className="flex flex-col gap-1">
                    {proejcts
                      .filter((proj, index) => index <= 0 && proj)
                      .map((proj) => (
                        <Project
                          key={proj.name}
                          name={proj.name}
                          companyName={proj.companyName}
                          dateFrom={proj.dateFrom}
                          dateTo={proj.dateTo}
                          description={proj.description}
                        ></Project>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </USLetterTemplate>
        <USLetterTemplate className="p-8">
          <div className="flex gap-4 w-full">
            <div className="w-[60%] flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <SectionTitle children="Education" />
                <Experience
                  designation="B-Tech, Information Technology"
                  dateFrom="2001"
                  dateTo="2005"
                  companyName="Anna University"
                />
              </div>
              <div className="flex flex-col gap-2">
                <SectionTitle children="Certification" />
                <Courses courses={certification} />
              </div>
              <div className="flex flex-col gap-2">
                <SectionTitle children="Training / Courses" />
                <Courses courses={courses}></Courses>
              </div>
              <div className="flex flex-col gap-2">
                <SectionTitle children="My time" />
                <Activities />
              </div>
              <div className="flex flex-col gap-2">
                <SectionTitle children="Find me online" />
                <div className="grid grid-cols-4 gap-1">
                  {socialMedia.map((media, index) => (
                    <SocialMedia key={index} name={media.name} link={media.link} icon={media.icon} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SectionTitle children="Strengths" />
                <Strengths strengths={strengths} />
              </div>
            </div>
            <div className="w-[38%] flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <SectionTitle children="Projects" />
                <div className="flex flex-col">
                  {proejcts
                    .filter((proj, index) => index > 0 && proj)
                    .map((proj, index) => (
                      <div key={index}>
                        <Project
                          name={proj.name}
                          companyName={proj.companyName}
                          dateFrom={proj.dateFrom}
                          dateTo={proj.dateTo}
                          description={proj.description}
                        ></Project>
                        {index < proejcts.length - 2 && <Divider />}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </USLetterTemplate>
      </div>
    </div>
  )
}

export default MyProfile
