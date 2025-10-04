import PrintAndZoom from '../../../components/PrintAndZoom'
import ProfileHeader from '../components/ProfileHeader'
import Summary from '../components/Summary'
import Activities from './Activities'
import Certifications from './Certifications'
import Education from './Educations'
import Experiences from './Experiences'
import Projects from './Projects'
import Skills from './Skills'
import './ProfileView.css'

const ProfileView = () => {
  return (
    <PrintAndZoom>
      <div className="flex flex-col profile-font-family bg-white text-black ">
        <div className="flex flex-col items-center w-[828px] m-2 h-[1026px] px-12 py-8 gap-2">
          <ProfileHeader />
          <Summary />
          <Skills doubleSided={true} />
          <Experiences start={0} end={0} />
        </div>
        <div className="flex flex-col items-center w-[828px] h-[1026px] mt-6 px-12 py-8 gap-2">
          <Experiences start={1} end={3} showTitle={false} />
          <Education />
          <Certifications />
          <Activities />
          <Projects />
        </div>
      </div>
    </PrintAndZoom>
  )
}

export default ProfileView
