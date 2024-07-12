import React,{useState} from "react";
import ReviewArea from "./Components/ReviewArea";
import './App.css';

function App() {
  const [title,setTitle] = useState("Hotel Crystal Pashupati");
  
  return (
    <div className="App">
      <header></header>
      <div className="review-landing-page">
        <h2 className = 'hotel-title'>Welcome to {title}</h2>
        <div className = "img-container">
         <img src="./hotelsample.jpg"/>
         
        </div>
      </div>
      <div className="review-area">
        <ReviewArea/>
      </div>
    </div>

  );
}

export default App;
