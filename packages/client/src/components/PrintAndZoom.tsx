import { useRef, useState, type PropsWithChildren } from 'react'
import { useReactToPrint } from 'react-to-print'

interface PrintAndZoomProps extends PropsWithChildren {
  sdfsdf?: string
}

const PrintAndZoom = ({ children }: PrintAndZoomProps) => {
  const profileRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1.5)
  const reactToPrint = useReactToPrint({
    contentRef: profileRef,
  })
  const handlePrint = () => {
    setScale(1.01)
    setTimeout(() => reactToPrint(), 0)
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-row gap-2 justify-center">
        <button onClick={handlePrint} className="border px-2 rounded cursor-pointer">
          Print
        </button>
        <button className="border px-2 rounded cursor-pointer" onClick={() => setScale((s) => s + 0.1)}>
          +
        </button>
        <button className="border px-2 rounded cursor-pointer" onClick={() => setScale((s) => Math.max(1, s - 0.1))}>
          -
        </button>
      </div>
      <div
        ref={profileRef}
        id="content"
        className="flex justify-center"
        style={{ transform: `scale(${scale})`, transformOrigin: 'top' }}
      >
        {children}
      </div>
    </div>
  )
}

export default PrintAndZoom
