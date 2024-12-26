import React from 'react'
import "./Css/pricingSection.css"
import Card from './Card'
const Pricing = () => {
  return (
    <section className='pricingSection basicSection'>
        <div >
            <h2 className="heading text-success">Pricing Plans List</h2>
        </div>
        <div className="cards-container">
            <Card 
            cat="Free"
            title="Free"
            sub="For one time only"
            item1="Credit upto 10 review"
            item2="Dashboard login"
            btn ="Start for free"
            />
            <Card
            cat="Monthly"
            recom="Best Plan"
            title="Rs1000"
            sub="Monthly Billed"
            item1="Unlimited access"
            item2="Dashboard login"
            item3="User data access"
            btn ="Get Now"
            />
            <Card
            cat="Yearly"
            recom="20% Off"
            title="Rs800"
            sub="Yearly Billed"
            item1="Unlimited access"
            item2="Dashboard login"
            item3="User data access"
            btn ="Get Now"
            /> 
        </div>
    </section>
  )
}

export default Pricing