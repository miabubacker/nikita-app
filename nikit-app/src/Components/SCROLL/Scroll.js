import React from 'react'
import './Scroll.scss'
export default function Scroll(props) {
     const {handleClickScroll}= props
  return (
<section className='scroll_Container'>
    <div className='btn g'>Buy Template</div>
    <div  className='btn' onClick={()=>{handleClickScroll('aboutme')}}>About</div>
    <div  className='btn'  onClick={()=>{handleClickScroll('howiwork')}}>Design Process</div>
    <div  className='btn' onClick={()=>{handleClickScroll('skill')}}>Skill</div>
    <div  className='btn'  onClick={()=>{handleClickScroll('blog')}}>Blog</div>
    <div  className='btn'  onClick={()=>{handleClickScroll('telegram')}}>Telegram Channel</div>
    <div  className='btn'  onClick={()=>{handleClickScroll('mentorship')}}>Mentorship</div>
    <div  className='btn'  onClick={()=>{handleClickScroll('getintouch')}}>Contact</div>
</section>
  )
}
