import React, { useState,useEffect } from "react";
import './App.css';
import ReviewArea from "./Components/ReviewArea";
import Navbar from "./Components/Navbar";
import { BrowserRouter,
        useLocation
 } from "react-router-dom";
function App() {
  const [shopData,setShopData] = useState([]);
  const searchParams = new URLSearchParams(window.location.search);
  console.log(window.location.search)
  const fetchData = async () => {
    
    const res  = await fetch("https://review-it-9ad51-default-rtdb.firebaseio.com/collection.json");
    const data =  await res.json()
    console.log(data)
    setShopData(data)

}
useEffect(()=>{
      
 fetchData()
},[])
  return (
    <>
    
    <BrowserRouter basename="/">
        <Navbar/>
        {
          
          shopData.map((item,index)=>{
            // console.log(window.location.search)
            if(item.compTitle === window.location.search){
              return(
                  <><h2 className="heading3"> Review To <span>{item.title}</span></h2><div className="App">
                  <div className="ReviewComponentContainer"> <ReviewArea reviewUrl ={item.reivewUrl}  /> </div>
                </div></>
              )
            }else if(window.location.search === ""){
              return(
                <><h2 className={`heading3${index===1?"1":""}`}> Review To <span>SAMA Coffee House</span></h2><div className="App">
                <div className={`ReviewComponentContainer${index===1?"1":""}`}> <ReviewArea   /> </div>
              </div></>
            )
              
            }
            
          })
        }
        
    </BrowserRouter>
    
    </>

  );
}

export default App;
