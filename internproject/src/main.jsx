import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

AOS.init();






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
   
  </React.StrictMode>,
)
