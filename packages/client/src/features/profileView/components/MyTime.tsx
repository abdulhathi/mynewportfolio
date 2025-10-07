import classnames from 'classnames'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   plugins,
// } from 'chart.js'
// import { Pie } from 'react-chartjs-2'
import './MyTime.css'

// ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// const activities = [
//   { name: 'Coding & Development', value: 70 },
//   { name: 'Code Review', value: 20 },
//   { name: 'Mentoring Junior Engineers', value: 10 },
//   { name: 'Agile(scrum & Grooming)', value: 10 },
// ]

// const chartData = {
//   labels: ['Red', 'Blue', 'Yellow'],
//   datasets: [
//     {
//       label: 'My First Dataset',
//       data: [150, 25, 50],
//       backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
//       hoverOffset: 4,
//     },
//   ],
// }

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const MyTime = () => {
  return (
    // <div>
    //   <Pie
    //     className="pie-style"
    //     data={chartData}
    //     options={{
    //       plugins: {
    //         legend: {
    //           display: true,
    //           position: 'right',
    //         },
    //       },
    //     }}
    //   ></Pie>
    // </div>
    <div className="flex flex-row gap-2 text-[12px] w-full flex-wrap justify-self-auto">
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
