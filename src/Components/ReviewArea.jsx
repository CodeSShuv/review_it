import React,{useState,useEffect} from "react"
import Groq from "groq-sdk";
// .............................
import "./css/ReviewArea.css"
import "./css/ResponsiveReviewBox.css"
// ...............................



const ReviewArea=({reviewUrl})=>{

    const [value,setValue] = useState("");
    const [disable, setDisable] = useState(true)
    const generateReview = ()=>{
        
        const groq = new Groq({ apiKey: "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",dangerouslyAllowBrowser: true });
    
        const main = async ()=> {
         const chatCompletion = await getGroqChatCompletion();
        
       
        let filteredChat = chatCompletion.choices[0]?.message?.content || ""  ; 
        
        setValue (  filteredChat);

        setDisable(false);

       
       }
       
       const getGroqChatCompletion = async() =>{
         return groq.chat.completions.create({
           messages: [
             {
               role: "user",
               content: "write a good unique review for cafe in 3 lines without hotel name and without food or dish name just like 13 yearold child without double inverted comma",
             },
           ],
           model: "llama3-8b-8192",
         });
       }
      main()
    }
    useEffect(()=>{
      setValue(generateReview())
    },[])
   
    // 
    return (
        <>
        
            {/* <h3 className="heading3">Give Review Hassle Free</h3> */}
            
           
      <div className="container">
        <textarea disabled value = {value}  className="textarea" ></textarea>
        
        <a href={reviewUrl} onClick={()=>{navigator.clipboard.writeText(value); }} className={`button${disable?" disable":""}`}>Copy & Review</a>
    </div>
            
        </>
    )
}
ReviewArea.defaultProps = {
  reviewUrl :"https://reviewthis.biz/damp-wind-6170"
};
export default ReviewArea;