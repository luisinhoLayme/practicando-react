import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HooksApp />
  </BrowserRouter>
)

//HACK: you are at video not started, of the folder 11.Profundizando Hooks- useContext
