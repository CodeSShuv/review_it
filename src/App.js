import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // BrowserRouter
} from 'react-router-dom'
import "./App.css"
// import Navbar from './Component/Navbar'
// import Review from './Component/Review'
// import Pricing from './Component/Pricing'
import GenerateReview from './Component/GenerateReview'
// import ApplyForm from './Component/ApplyForm'
import MoodQuestion from './Component/MoodQuestion'
// import logoImg from '../src/img/byaparhub.com-min.png'
const App = () => {

  const [moodQuestion, setMoodQuestion] = useState({
    isHappy: null,
    isGood: null,
    isExcellent: null
  })
  const [dataFetch, setDataFetch] = useState({
    isLoading: true,
    text: "Loading"
  })
  useEffect(()=>{
    console.log(moodQuestion)
  },[moodQuestion]);

  return (
    <Router basename='/'>

      <div className='App' style={{ display: "flex", justifyContent: "center", padding: '4' }}>
        {/* <Navbar/> */}

        <Routes>
          {/* <Route path='/form' element={<ApplyForm/>}/> */}
          {/* <Route path='/review_it' element={<Review/>}/> */}
          <Route path='/review_it'
            element={<MoodQuestion
              moodQuestion={moodQuestion}
              setMoodQuestion={setMoodQuestion}
              dataFetch={dataFetch}
              setDataFetch={setDataFetch}
            />}

          />
          {/* <Route path='/pricing' element={<Pricing/>}/> */}
          <Route path='/review_it/generate' element={<GenerateReview
            moodQuestion={moodQuestion}
            dataFetch={dataFetch}
            setDataFetch={setDataFetch}
          />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App