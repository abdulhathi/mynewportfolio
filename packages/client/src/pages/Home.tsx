import { useState } from 'react'
import portfolioPhoto from '../assets/profile_photo.jpeg'
import PopupModel from '../components/PopupModel'
import Button from '../corecomponents/Button'

const Home = () => {
  const [isModelOpen, setModelOpen] = useState<boolean>(false)
  const closeModel = () => setModelOpen(!isModelOpen)
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
            setModelOpen(!isModelOpen)
          }}
        >
          Download Profile
        </Button>
        <PopupModel isOpen={isModelOpen} onClose={closeModel}></PopupModel>
      </header>
    </div>
  )
}

export default Home
