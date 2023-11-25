import React from 'react'
import './Centre.scss'
import Profile from './ContentBox/profile/Profile'
import Mentorship from './ContentBox/profile/Mentorship/Mentorship'
import GetInTouch from './ContentBox/profile/GetinTouch/GetInTouch'

export default function Centre() {
  return (
    <section className='center_Container'>
        <Profile/>
        <Mentorship/>
        <GetInTouch/>
    </section>
  )
}
