import React from 'react'
import ReactDOM from 'react-dom/client'
// import { AppCounter } from './AppCounter.jsx'
import './index.css'
import { CounterApp } from './CounterApp.jsx'
// import { FirstApp } from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 5 } />
    {/* <FirstApp title="Hola Luisinho" /> */}
  </React.StrictMode>,
)

//INFO: Hola


