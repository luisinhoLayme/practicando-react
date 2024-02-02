import React from 'react'
import ReactDOM from 'react-dom/client'
// import { AppCounter } from './AppCounter.jsx'
import './index.css'
import { CounterApp } from './CounterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 5 } />
  </React.StrictMode>,
)


