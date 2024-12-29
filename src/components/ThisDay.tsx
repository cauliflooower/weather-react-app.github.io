import { Weather } from "../store/types/types"
import React, { useState } from "react"
import './Weather.css'

interface Props {
    weather: Weather,
}

export const ThisDay = ({weather}: Props) => {
    const [valueInput, setInput] = useState('')



return(
    <>
    <div className="this-block">
        <div className='search'>
            <input value={valueInput} onChange={(event) => setInput(event.target.value)} type="text" className="search-field" placeholder="Введите название города"/>
            {/* <img src={search_icon} 
                onClick={()=> search(valueInput)} alt="search" className="search-icon"/> */}
            </div>
            <h1>{Math.floor(weather.main.temp)}°C</h1>
        <h3></h3>
        <div className="date-block">
          {/* <img src={props.weatherIcon}></img>
          <p>Current date and time: {currentDate}</p> */}
        </div>
    </div>
    </>
    )
}