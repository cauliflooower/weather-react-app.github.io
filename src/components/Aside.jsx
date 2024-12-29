import { useState } from 'react'
import './Aside.css'

function Aside() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="aside-container">
      <h1>hellllllo</h1>
    {/* <select className="select">
        <option className="optional" value="value1" selected>Погодные условия</option>
        <option className="optional" value="value2">Ветер</option>
        <option className="optional" value="value3">Осадки</option>
        <option className="optional" value="value3">Давление</option>
        <option className="optional" value="value3">Видимость</option>
    </select> */}
    </div>
    </>
  )
}

export default Aside;
