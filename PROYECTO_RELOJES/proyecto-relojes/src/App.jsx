import { useState } from 'react'
import DigitalClock from './components/DigitalClock/DigitalClock.jsx'
import Countdown from './components/Countdown/Countdown.jsx'
import Stopwatch from './components/Stopwatch/Stopwatch.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <DigitalClock digitalClock={DigitalClock}/>
      <Countdown countdown={Countdown} />
      <Stopwatch stopwatch={Stopwatch} />
    </>
  )
}

export default App
