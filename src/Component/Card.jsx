import React from 'react'
import "./Css/card.css"
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <div className="card d-flex" style={{width: "19rem",marginLeft:"2rem"}}>
            <div className="card-body">
                <div className="upperBody">

            <p className='text-black'>{props.cat}</p>
            <p className={`${props.recom === undefined?"bg-success none":"bg-success btn-success rounded"}`}>{props.recom}</p>
                </div>
                <div className='midBody'>
                <h5 className="card-title text-success"style={{fontSize: "2rem"}}>{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-black">{props.sub}</h6>
                </div>
           
                
               
               <ul className='d-flex flex-column'>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li className={`${props.item3 === undefined?"none":""}`}>{props.item3}</li>
               </ul>
               <Link to={"/form"} className='btn btn-success' >{props.btn}</Link>
            </div>
        </div>
    )
}

export default Card