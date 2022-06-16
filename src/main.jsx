import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import { DataProvider } from './context/DataContext'
import Paths from './routes'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <NavBar />
        <Paths />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
)
