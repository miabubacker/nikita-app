import React from 'react'
import './Left.scss'
import HeaderBox from './ContentBox/HeaderBox/HeaderBox'
import Aboutme from './ContentBox/Aboutme/Aboutme'
import Blog from './ContentBox/Blog/Blog'
import ThankYou from './ContentBox/ThankYou/ThankYou'
export default function Leftmain() {
  return (
<section className='left_Container'>
  <HeaderBox/>
  <Aboutme/>
  <Blog/>
  <ThankYou/>
</section>
  )
}
