import React from 'react'
import "./Css/generateqr.css"
const GenerateQr = () => {
  return (
    <div className='generateQrContainer'>
      <div className='inputContainer'>

        <input type="text" placeholder='Get your AI QR' />
        <button className='btn btn-success'>Generate</button>
      </div>
    </div>
  )
}

export default GenerateQr