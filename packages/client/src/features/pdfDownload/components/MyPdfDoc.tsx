import { useRef } from 'react'
import Profile from '../../profile/profile/Profile'
import Button from '../../../corecomponents/Button'
import { useReactToPrint } from 'react-to-print'

const MyPdfDoc = () => {
  const componentRef = useRef<HTMLDivElement>(null)

  const reactToPrint = useReactToPrint({
    contentRef: componentRef,
  })

  return (
    <div>
      <div ref={componentRef} className='hidden'>
        <Profile />
      </div>
      <Button onClick={reactToPrint}>Download PDF</Button>
    </div>
  )
}

export default MyPdfDoc
