interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  p?: string
}

const Button = (props: ButtonProps) => {
  return <button className="bg-amber-600 border rounded-[5px] px-5 py-1 text-white cursor-pointer" {...props}></button>
}

export default Button
