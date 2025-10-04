import ProfileSideBySide from './ProfileSideBySide'
import './ProfileView.css'

interface ProfileForDownloadProps {
  profileRef: React.RefObject<HTMLDivElement | null>
}
const ProfileForDownload = ({ profileRef }: ProfileForDownloadProps) => {
  return (
    <div
      ref={profileRef}
      className="flex flex-col items-center justify-center w-full profile-font-family bg-white text-black"
    >
      <ProfileSideBySide />
    </div>
  )
}

export default ProfileForDownload
