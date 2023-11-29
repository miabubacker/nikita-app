import React from 'react'
 import './FixedMade.scss'
import framer from '../../Assets/Imgs/framer.svg'
export default function FixedMade() {
  return (
<section className='fixedMadeContainer'>
    <div className='button_text'><img src={framer}/>Made in Framer</div>
</section>
  )
}
