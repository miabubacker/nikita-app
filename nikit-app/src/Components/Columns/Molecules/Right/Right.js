import React from 'react'
import './Right.scss'
import HowIWork from './ContentBox/HowIWork/HowIWork'
import Telegram from './ContentBox/HowIWork/TelegramChannel/Telegram'
export default function Right() {
  return (
    <section className='right_Container'>
        <HowIWork/>
        <Telegram/>
    </section>
  )
}
