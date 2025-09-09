import { FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import Headline from './Headline'
import USLetterTemplate from './USLetterTemplate'
import './myprofile.css'
import { MdAlternateEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { SiLeetcode } from 'react-icons/si'
import { FaLocationDot } from 'react-icons/fa6'
import SectionTitle from './SectionTitle'
import experiences from './experience.json'
import Experience from './Experience'
import skills from './skills.json'
import SkillGroup from './SkillGroup'
import proejcts from './projects.json'
import Project from './Project'

const myprofile = () => {
  const headlines = ['Senior Application Engineer', 'Technical Architect', 'Full-Stack Leader', 'AI/ML Innovator']
  return (
    <div className={`flex flex-col items-center justify-center w-full p-3 gap-8 profile-font-family`}>
      <USLetterTemplate>
        <div className="flex flex-col gap-8">
          <div className='flex'>
            <div className="flex flex-col gap-2">
              <p className="text-[34px] uppercase font-medium p-0 m-0 leading-5">Abdul Hathi Mohamed Hussain</p>
              <div className="flex gap-2 leading-5">
                {headlines.map((headline, index) => (
                  <div className="flex gap-2" key={index}>
                    <Headline>{headline}</Headline>
                    <Headline>{index + 1 === headlines.length ? '' : '|'}</Headline>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap leading-5">
                <div className="flex gap-2 items-center">
                  <FaPhone className="text-blue-500" />
                  <text className="font-medium">+1-(562)-606-8314</text>
                </div>
                <div className="flex gap-2 items-center">
                  <MdAlternateEmail className="text-blue-500" />
                  <a className="font-medium" href="mailto:abdulhathi@gmail.com">
                    abdulhathi@gmail.com
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaLinkedin className="text-blue-500" />
                  <a className="font-medium" href="https://www.linkedin.com/in/abdulhathi/">
                    https://www.linkedin.com/in/abdulhathi/
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <SiLeetcode className="text-blue-500" />
                  <a className="font-medium" href="https://leetcode.com/u/abdulhathi/">
                    https://leetcode.com/u/abdulhathi/
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaLocationDot className="text-blue-500" />
                  28 Hayes Street, Irvine, CA - 92620
                </div>
              </div>
            </div>
            <img></img>
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-[65%] flex flex-col gap-4">
              <div>
                <SectionTitle children="Summary" />
                <p className="text-[12px]">
                  Innovative and results-driven <b>Senior Application Engineer</b> with 18+ years of proven success in
                  full-stack development, cloud architecture, and scalable enterprise solutions across healthcare and
                  technology domains. Adept at leading cross-functional teams, architecting complex systems, and
                  delivering high-performance applications that improve user experience and business efficiency.
                  Recognized for technical versatility, problem-solving excellence, and mentoring talent to achieve
                  engineering excellence.
                </p>
              </div>
              <div>
                <SectionTitle children="Experience" />
                <div className="flex flex-col gap-2">
                  {experiences.map(({ designation, companyName, dateFrom, dateTo, location, summaryPoints }) => (
                    <Experience
                      key={companyName}
                      designation={designation}
                      companyName={companyName}
                      dateFrom={dateFrom}
                      dateTo={dateTo}
                      location={location}
                      summaryPoints={summaryPoints}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[35%] flex flex-col gap-4">
              <div>
                <SectionTitle children="Skills" />
                <div className="flex flex-col gap-2">
                  {skills.map(({ skillGroupTitle, skills }) => (
                    <SkillGroup key={skillGroupTitle} skillGroupTitle={skillGroupTitle} skills={skills} />
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle children="Projects" />
                <div className="flex flex-col gap-2">
                  {proejcts
                    .filter((proj, index) => index <= 1 && proj)
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
      <USLetterTemplate>
        <div className="flex gap-3 w-full">
          <div className="w-[65%] flex flex-col gap-4">
            <div>
              <SectionTitle children="Education" />
            </div>
            <div>
              <SectionTitle children="Certification" />
            </div>
            <div>
              <SectionTitle children="Training / Courses" />
            </div>
            <div>
              <SectionTitle children="My time" />
            </div>
            <div>
              <SectionTitle children="Find me online" />
            </div>
            <div>
              <SectionTitle children="Strengths" />
            </div>
          </div>
          <div className="w-[35%] flex flex-col gap-4">
            <div>
              <SectionTitle children="Projects" />
              <div className="flex flex-col gap-2">
                {proejcts
                  .filter((proj, index) => index > 1 && proj)
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
      </USLetterTemplate>
    </div>
  )
}

export default myprofile
