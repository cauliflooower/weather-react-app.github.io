import { useState } from 'react'
import './Card.css'
import { format } from 'date-fns';
import drizzle_icon from '../assets/04d@2x.png'



function Card(props) {
  const [valueInput, setInput] = useState('')

  const currentDate = format(new Date(), 'MMMM do yyyy, h:mm a');

  return (
    <>
        <div className='card-block'>
            <h1>Monday</h1>
            <img src={drizzle_icon} alt="icon" />
        </div>
    </>
  )
}

export default Card;
