import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
// import SearchBox from './weatherWidget/SearchBox.jsx';
import './weatherWidget/SearchBox.css';
// import InfoBox from './weatherWidget/InfoBox.jsx';
import WeatherApp from "./weatherWidget/WeatherApp.jsx";

function App() {

  {/* count increment logic */}
  // const [count, setCount] = useState(0);
  // let makeCount = () => {
  //   setCount((num) => {
  //     if(num < 10)
  //       return num+1;
  //     else 
  //       return num;
  //   })
  // }
  // let resetCount = () => {
  //   setCount(0);
  // }

  return (
    <div className='SearchBox'>
        {/* count increment logic */}
        {/* <Button variant='outlined' onClick={makeCount} style={{textTransform:"lowerCase"}}>Increment</Button>
        <h1>count = {count}</h1>
        <Button variant="contained" onClick={resetCount} style={{textTransform:"lowerCase"}}>reset</Button> */}

        {/* weather widget app */}
        {/* <SearchBox />
        <InfoBox /> */}
        <WeatherApp />
    </div>
  )
}

export default App
