
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../Main';
import { Offer } from '../Offer';



export const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/offer' element={<Offer/>}/>
            
        </Routes>
    </Router>
    </>
  )
}
