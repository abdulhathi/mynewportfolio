import classnames from 'classnames'

// const activities = [
//   { name: 'Coding & Development', value: 70 },
//   { name: 'Code Review', value: 20 },
//   { name: 'Mentoring Junior Engineers', value: 10 },
//   { name: 'Agile(scrum & Grooming)', value: 10 },
// ]

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const MyTime = () => {
  return (
    <div className="grid grid-cols-2 gap-1 text-[12px]">
      <div className="flex gap-2 items-center">
        <div className={classnames('w-3', 'h-3', `bg-[#0088FE]`)} />
        <p>Coding & Development - 70%</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className={classnames('w-3', 'h-3', `bg-[#00C49F]`)} />
        <p>Code Review - 20%</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className={classnames('w-3', 'h-3', `bg-[#FFBB28]`)} />
        <p>Mentoring Junior Engineers - 5%</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className={classnames('w-3', 'h-3', `bg-[#FF8042]`)} />
        <p>Agile(scrum & Grooming) - 5%</p>
      </div>
    </div>
  )
}

export default MyTime
