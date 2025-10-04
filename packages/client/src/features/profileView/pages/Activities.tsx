import MyTime from '../components/MyTime'
import SectionTitle from '../components/SectionTitle'

const Activities = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <SectionTitle children="My time" />
      <MyTime />
    </div>
  )
}

export default Activities
