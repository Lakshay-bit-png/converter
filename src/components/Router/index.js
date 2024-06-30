
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../Main';



export const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            
            
        </Routes>
    </Router>
    </>
  )
}
