import React,{useState,useEffect} from "react"
import Groq from "groq-sdk";
// .............................
import "./css/ReviewArea.css"
import "./css/ResponsiveReviewBox.css"
// ...............................
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ReviewArea=()=>{
    const [value,setValue] = useState("");
    const generateReview = ()=>{
        
        const groq = new Groq({ apiKey: "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",dangerouslyAllowBrowser: true });
    
        const main = async ()=> {
         const chatCompletion = await getGroqChatCompletion();
         // Print the completion returned by the LLM.
       //   console.log(chatCompletion.choices[0]?.message?.content || "")
            
        setValue (  chatCompletion.choices[0]?.message?.content || "");
       
       }
       
       const getGroqChatCompletion = async() =>{
         return groq.chat.completions.create({
           messages: [
             {
               role: "user",
               content: "write a good unique review for hotel in 3lines without hotel name in easy english",
             },
           ],
           model: "llama3-8b-8192",
         });
       }
      main()
    }
    useEffect(()=>{
      generateReview();
    },[])
    // setValue(generateReview())
    return (
        <>
        
            <h3>Give Review Hassle Free</h3>
            
           
      <div className="container">
        <textarea disabled value = {value}  className="textarea" ></textarea>
        <a href="https://www.google
        .com/maps/place/SAMA+Coffee+Hou
        se/@27.7119382,85.3078004,17z/data=
        !4m18!1m9!3m8!1s0x39eb19a840b9cd21:
        0x86dacc355de53f6f!2sSAMA+Coffee+House!8m2!3d27.
        7119382!4d85.3078004!9m1!1b1
        !16s%2Fg%2F11p5n5fpty!3m7!1s0x39e
        b19a840b9cd21:0x86dacc355de53f6f!8m2!3d27.7
        119382!4d85.3078004!9m1!1b1!16s%2Fg%2F11p5n5
        fpty?entry=ttu" onClick={()=>{navigator.clipboard.writeText(value); }} className="button">Copy & Review</a>
    </div>
            
        </>
    )
}
export default ReviewArea;