import React from "react";
import './App.css';
import ReviewArea from "./Components/ReviewArea";
import Navbar from "./Components/Navbar";
import { BrowserRouter,
          
 } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter basename="/">
        <Navbar/>
        <h2 className="heading3"> Review To <span>SAMA Coffee House</span></h2>
      <div className="App">
        <div className="ReviewComponentContainer"> <ReviewArea/> </div>
      </div>
    </BrowserRouter>
    
    </>

  );
}

export default App;
