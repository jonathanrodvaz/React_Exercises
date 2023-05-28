import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './Clock.jsx'
import ClockMessage from './ClockMessage.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClockMessage />
    <Clock />
  </React.StrictMode>,
)
