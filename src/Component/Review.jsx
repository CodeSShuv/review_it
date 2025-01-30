import React from 'react'
import GenerateQr from './GenerateQr'
import "./Css/review.css"

const Review = () => {
    return (
        <section className='ReviewSection basicSection'>
            <div >

                <h1 style={style.heading} className='heading text-success'>Generate Review in 5 Seconds</h1>
            </div>
            <span>
                <p style={style.p}>ByaparHub is a AI generation platform for easy and fast review.</p>
            </span>
            <GenerateQr />
            
        </section>
    )
}
const style= {
    p:{
        paddingLeft:"1rem"
    },
    heading:{
        paddingLeft:"1rem",
      fontSize:"4rem"  
    }
}
export default Review