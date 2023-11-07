import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './form/form.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App />}/> 
     <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
