import { useRef, useState } from 'react'
import portfolioPhoto from '../../../assets/profile_photo.jpeg'
import Button from '../../../corecomponents/Button'
import PopupModel from '../../../components/PopupModel'
import { useReactToPrint } from 'react-to-print'
import ProfileForDownload from '../../profileView/pages/ProfileForDownload'

const Welcome = () => {
  const [isModelOpen, setModelOpen] = useState<boolean>(true)
  const closeModel = () => setModelOpen(false)
  const profileRef = useRef<HTMLDivElement>(null)
  const reactToPrint = useReactToPrint({
    contentRef: profileRef,
  })
  return (
    <div className="flex gap-8 justify-center items-center h-screen bg-gray-600">
      <img src={portfolioPhoto} className="rounded-full w-100"></img>
      <header className="flex flex-col gap-10 text-white">
        <div>
          <h3 className="font-medium">I'm</h3>
          <h1 className="text-8xl font-extrabold uppercase">Abdul Hathi</h1>
        </div>
        <h2 className="text-2xl font-bold">Senior Application Engineer</h2>
        <Button
          onClick={() => {
            setModelOpen(true)
            reactToPrint()
            // setTimeout(() => {
            //   closeModel()
            // }, 0.00000000000001)
          }}
        >
          Download Profile
        </Button>
        <PopupModel isOpen={isModelOpen} onClose={closeModel}>
          <ProfileForDownload profileRef={profileRef} />
        </PopupModel>
      </header>
    </div>
  )
}

export default Welcome
