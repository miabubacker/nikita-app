import React from 'react'
 import './Sleft.scss'
import HeaderBox from '../Left/ContentBox/HeaderBox/HeaderBox'
import Profile from '../Center/ContentBox/profile/Profile'
import Blog from '../Left/ContentBox/Blog/Blog'
import Mentorship from '../Center/ContentBox/profile/Mentorship/Mentorship'
import ThankYou from '../Left/ContentBox/ThankYou/ThankYou'
import Aboutme from '../Left/ContentBox/Aboutme/Aboutme'
import SThank from './SThank/SThank'

export default function Sleft() {
  return (
    <section className='SLeft_container'>
        <HeaderBox/>
        <Profile/>
        <Aboutme/>
        <Blog/>
        <Mentorship/>
        <SThank/>
    </section>
  )
}
