import { FaLinkedin, FaPhone } from 'react-icons/fa'
import Headline from './Headline'
import USLetterTemplate from './USLetterTemplate'
import './myprofile.css'
import { MdAlternateEmail } from 'react-icons/md'
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

const MyProfile = () => {
  const headlines = ['Senior Application Engineer', 'Technical Architect', 'Full-Stack Leader', 'AI/ML Innovator']
  return (
    <div id="content" className={`flex flex-col items-center justify-center w-full profile-font-family`}>
      <USLetterTemplate className="px-5 pt-2">
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
                  <div className="flex gap-1 items-center">
                    <FaLocationDot className="text-[#458EF7]" />
                    28 Hayes Street, Irvine, CA - 92620
                  </div>
                </div>
              </div>
            </div>
            <img src={profilePhoto} width={100} className="rounded-full"></img>
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-[60%] flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <SectionTitle children="Summary" />
                <div className="text-[12px] leading-4">
                  {summaries.map(({ summary }) => (
                    <Markdown>{summary}</Markdown>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SectionTitle children="Experience" />
                <div className="flex flex-col">
                  {experiences.map(({ designation, companyName, dateFrom, dateTo, location, summaryPoints }, index) => (
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
                      {index < experiences.length - 1 && <div className="h-0.25 w-full bg-gray-200 my-0.5"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[40%] flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <SectionTitle children="Skills" />
                <div className="flex flex-col gap-0">
                  {skills.map(({ skillGroupTitle, skills }, index) => (
                    <div key={skillGroupTitle}>
                      <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} />
                      {index < skills.length - 1 && <div className="h-0.25 w-full bg-gray-200 my-1"></div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
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
      <USLetterTemplate className="px-5 pt-4">
        <div className="flex gap-4 w-full">
          <div className="w-[60%] flex flex-col gap-1">
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
          <div className="w-[40%] flex flex-col">
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
                      {index < proejcts.length - 2 && <div className="h-0.25 w-full bg-gray-200 my-1"></div>}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </USLetterTemplate>
    </div>
  )
}

export default MyProfile
