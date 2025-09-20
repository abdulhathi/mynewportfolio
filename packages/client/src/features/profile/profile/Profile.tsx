import USLetterTemplate from './USLetterTemplate'
import './Profile.css'
import SectionTitle from './SectionTitle'
import Experience from './Experience'
import skills from './skills1.json'
import SkillGroup from './SkillGroup'
import Project from '../../profileView/components/ProfileProject'
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
import Divider from './Divider'
import ProfileHeader from '../../profileView/components/ProfileHeader'

interface ProfileProps {
  profileRef: React.RefObject<HTMLDivElement | null>
}

const Profile = ({ profileRef }: ProfileProps) => {
  return (
    <div
      ref={profileRef}
      className="flex flex-col items-center justify-center w-full profile-font-family bg-white text-black"
    >
      <USLetterTemplate className="p-8">
        <div className="flex flex-col gap-0">
          <ProfileHeader />
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
                      {index < experiences.length - 1 && <Divider />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[40%] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <SectionTitle children="Skills" />
                <div className="flex flex-col gap-0">
                  {skills.map(({ skillGroupTitle, skills }, index) => (
                    <div key={index}>
                      <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} />
                    </div>
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
                {proejcts.map((proj, index) => (
                  <div key={index}>
                    <Project
                      name={proj.name}
                      companyName={proj.companyName}
                      dateFrom={proj.dateFrom}
                      dateTo={proj.dateTo}
                      description={proj.description}
                    ></Project>
                    {index < proejcts.length && <Divider />}
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

export default Profile
