import React from 'react'
import GenerateQr from './GenerateQr'
import "./Css/review.css"

const Review = () => {
    return (
        <section className='ReviewSection basicSection'>
            <div >

                <h1 className='heading text-success'>Generate Review in 5 Seconds</h1>
            </div>
            <span>
                <p>ByaparHub is a AI generation platform for easy and fast review.</p>
            </span>
            <GenerateQr />
            
        </section>
    )
}

export default Review