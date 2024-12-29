import { useState } from 'react'
import './Weather.css'
import { format } from 'date-fns';
import Card from './Card';

function Dashboard(props) {
  const [valueInput, setInput] = useState('')

  const currentDate = format(new Date(), 'MMMM do yyyy, h:mm a');

  const days = [
    {
      id: 1,
      day: "сегодня",
      day_info: "29 деакбря",
      icon_id: "clear_icon",
      temp_day: '+18',
      temp_night: '-18',
      info: 'Облачно',
    },
    {
      id: 2,
      day: "сегодня",
      day_info: "29 деакбря",
      icon_id: "clear_icon",
      temp_day: '+18',
      temp_night: '-18',
      info: 'Облачно',
    },
    {
      id: 3,
      day: "сегодня",
      day_info: "29 деакбря",
      icon_id: "clear_icon",
      temp_day: '+18',
      temp_night: '-18',
      info: 'Облачно',
    },
    {
      id: 4,
      day: "сегодня",
      day_info: "29 деакбря",
      icon_id: "clear_icon",
      temp_day: '+18',
      temp_night: '-18',
      info: 'Облачно',
    },
  ]

  return (
    <>
    <div className="dash-container">
          {
            days.map(day => <Card day={day} key={day.id}/>)
          }
    </div>
    </>
  )
}

export default Dashboard;
