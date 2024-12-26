import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  // BrowserRouter
 } from 'react-router-dom'
import "./App.css"
import Navbar from './Component/Navbar'
import Review from './Component/Review'
import Pricing from './Component/Pricing'
const App = () => {
  return (
   <Router>

    <div className='App'>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Review/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
        
    </Routes>
    </div>
   </Router>
  )
}

export default App