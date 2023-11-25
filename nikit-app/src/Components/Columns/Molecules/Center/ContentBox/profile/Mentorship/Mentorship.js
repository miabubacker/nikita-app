import React, { useState } from 'react'
import './Mentorship.scss'
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon'
export default function Mentorship() {
     const[plan,setPlan]= useState(true)
  return (
   <section className='mentorship_Container'>
    <div className='mentormain'>
        <div className='topLayer'>
            <div className='mydesign'>6+ years of industry experience in design</div>
            <div><h2>Mentorship</h2></div>
            <p className='content'>Help for junior UI/UX designers and those moving into product development.</p>
        </div>
    </div>
    <div className='payment_Methods'>
        <div className='items'>
            <div  className={`classic ${plan&& 'plan'}`}onClick={()=>{setPlan(true)}}>Standard plan</div>
            <div  className={`classic ${!plan&& 'session'}`} onClick={()=>{setPlan(false)}}>session</div>
        </div>
       {plan&& <div className='info_section'>
        <div className='amount'>$100<span>/month</span></div>
        <div>
            
        </div>
        </div>}
        <div className='button_Container'>
            <div className='learnmore'>Learn more <AddCircleLineIcon/></div>
            <div className='whatsapp'>Order on Whatsapp</div>
        </div>
    </div>
   </section>
  )
}
