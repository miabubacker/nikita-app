import React from 'react'
import './GetTouch.scss'
export default function GetInTouch() {
  return (
    <section className='getinTouch_Container'>
       <div className='upperLayer'>
       <div className='availabe'>
            <div className='available_text'>Available for new projects</div>
            <div  className='circle'></div>
        </div>
        <div className='Title'>
            <h3>Get in Touch</h3>
        </div>
        <div className='about'>Looking to start a project and need that<br/> magical touch? Reach me!</div>
       </div>
       <div className='form'>
        <div className='name'>
            <input placeholder='First Name'/>
            <input placeholder='Last Name'/>
        </div>
        <div><input type='email' placeholder='E-mail'/></div>
        <div><input  placeholder="Subject"/></div>
        <div><textarea  placeholder="Message"/></div>
        <div className='btn'>Send E-Mail</div>
        <div className='footer'>By clicking the button, I agree that the above information will be used to contact me.</div>
       </div>
    </section>

    )
}
