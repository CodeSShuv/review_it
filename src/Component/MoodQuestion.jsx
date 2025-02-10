import React, { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {fetchChat} from "../connectToAI"

const MoodQuestion = ({moodQuestion,setMoodQuestion,setDataFetch,dataFetch}) => {

    const navigate = useNavigate()


    const generateData = async(mood)=>{
        const value = await fetchChat(mood)
        setDataFetch({
            isLoading:false,
            text:value
        })
    }

    const handleClick =(e)=>{
        if(e.target.name === "good"){
            setMoodQuestion({
                isGood:true,
                isHappy:null,
                // isGood:null,
                isExcellent:null
            })
        }else if(e.target.name === "happy"){
            setMoodQuestion({
                isHappy:true,
                isGood:null,
                isExcellent:null
            })

        }else if(e.target.name === "excellent"){
            setMoodQuestion({
                isHappy:null,
                isGood:null,
                // isExcellent:null
                isExcellent:true
            })
        }
        const urlPart = window.location.href.split("?")[1];
        navigate(`/review_it/generate/?${urlPart}`)
        generateData(moodQuestion)
    }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">How is your mood? 😊</h1>
      <div className="flex gap-4">
        <button
          name="good"
          style={style.btn}
          className="w-32 h-12 bg-black text-white rounded-full hover:opacity-90 focus:outline-none"
          onClick={handleClick}
        >
          Good 😊
        </button>
        <button
          name="happy"
          style={style.btn}
          className="w-32 h-12 bg-black text-white rounded-full hover:opacity-90 focus:outline-none"
          onClick={handleClick}
        >
          Happy 😄
        </button>
        <button
          name="excellent"
          style={style.btn}
          className="w-32 h-12 bg-black text-white rounded-full hover:opacity-90 focus:outline-none"
          onClick={handleClick}
        >
          Excellent 🤩
        </button>
      </div>
    </div>
  );
};

export default MoodQuestion;
const style={
    btn:{
        display:"block",
        width:"10rem",
        border:"none",
        padding:".6rem",
        borderRadius:"3rem",
        margin:"1rem auto",
        // marginLeft:"rem"
    }
}