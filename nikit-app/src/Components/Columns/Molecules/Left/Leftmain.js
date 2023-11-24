import React from 'react'
import './Left.scss'
import HeaderBox from './ContentBox/HeaderBox/HeaderBox'
import Aboutme from './ContentBox/Aboutme/Aboutme'
export default function Leftmain() {
  return (
<section className='left_Container'>
  <HeaderBox/>
  <Aboutme/>
</section>
  )
}
