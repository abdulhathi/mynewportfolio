interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  p?: string
}

const Input = (props: InputProps) => {
  return <input className="border px-2 py-1 rounded" {...props} />
}

export default Input
