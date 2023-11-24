import React from 'react'
import './HowIWork.scss'
import CollapseComponent from './Collapse/CollapseComponent'
export default function HowIWork() {
  return (
  <section className='howiWork_Container'>
    <div className='workContainer'>
        <div className='topLayer'>
            <div className='mydesign'>My design process</div>
            <div><h2>How I Work</h2></div>
            <p className='content'>When it comes to design I always like to approach projects from a broader perspective, considering business goals, user needs, feedbacks as well as the overall feel and aesthetic of the end-to-end experience.</p>
        </div>
        <div className='collapse'>
            <CollapseComponent/>
        </div>
    </div>
  </section>
  )
}
