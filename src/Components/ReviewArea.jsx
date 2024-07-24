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
               content: "write a good unique review for cafe in 3 lines without hotel name just like 13 yearold child",
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
        
            {/* <h3 className="heading3">Give Review Hassle Free</h3> */}
            
           
      <div className="container">
        <textarea disabled value = {value}  className="textarea" ></textarea>
        
        <a href="https://reviewthis.biz/damp-wind-6170" onClick={()=>{navigator.clipboard.writeText(value); }} className="button">Copy & Review</a>
    </div>
            
        </>
    )
}
export default ReviewArea;