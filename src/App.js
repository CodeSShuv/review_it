import React from "react";
import './App.css';
import ReviewArea from "./Components/ReviewArea";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
    {console.log(process.env.REACT_API_KEY)}
      <Navbar/>
      <h2> Review To <span>SAMA Coffee House</span></h2>
    <div className="App">
      <div className="ReviewComponentContainer"> <ReviewArea/> </div>
    </div>
    </>

  );
}

export default App;
