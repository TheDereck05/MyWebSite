import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* Aquí se carga toda tu app */}
  </React.StrictMode>,
)