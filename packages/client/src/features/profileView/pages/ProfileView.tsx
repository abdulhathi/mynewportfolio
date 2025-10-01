import PrintAndZoom from '../../../components/PrintAndZoom'
import ProfileHeader from '../components/ProfileHeader'
import Summary from '../components/Summary'
import Certifications from './Certifications'
import Education from './Education'
import Experiences from './Experiences'
import Projects from './Projects'
import Skills from './Skills'

const ProfileView = () => {
  return (
    <PrintAndZoom>
      <div className="flex flex-col profile-font-family bg-white text-black ">
        <div className="flex flex-col items-center w-[828px] h-[1026px] px-8 py-8 gap-2">
          <ProfileHeader />
          <Summary />
          <Skills />
          <Experiences start={0} end={0} />
        </div>
        <div className="flex flex-col items-center w-[828px] h-[1026px] mt-4 px-8 py-8 gap-2">
          <Experiences start={1} end={10} showTitle={false} />
          <Education />
          <Certifications />
          <Projects />
        </div>
      </div>
    </PrintAndZoom>
  )
}

export default ProfileView
