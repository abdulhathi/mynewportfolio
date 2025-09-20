import type { PropsWithChildren } from 'react'

interface PopupModelProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function PopupModel({ isOpen, onClose, title, children = null }: PopupModelProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[-50] flex items-center justify-center bg-white/30 visible">
      <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-scroll h-170 w-200">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          ✕
        </button>

        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  )
}
