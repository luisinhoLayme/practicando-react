import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <Toaster
        position='top-right'
        richColors
        expand={ false }
        closeButton={ true }
      />
      <JournalApp />
    </Provider>
  </React.StrictMode>,
)

