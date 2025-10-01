interface DividerProps {
  marginY?: string
}
const Divider = ({ marginY = 'my-1' }: DividerProps) => {
  return <div className={`h-0.25 w-full bg-gray-200 ${marginY}`}></div>
}

export default Divider
