import React from 'react'
import './Right.scss'
import HowIWork from './ContentBox/HowIWork/HowIWork'
import Telegram from './ContentBox/HowIWork/TelegramChannel/Telegram'
import GlobeMain from './ContentBox/GlobeMain/GlobeMain'
import Globes from './ContentBox/HowIWork/TelegramChannel/Globe/Globes'
import Skill from './ContentBox/SkillBox/Skill'
export default function Right() {
  return (
    <section className='right_Container'>
        <HowIWork/>
        <Skill/>
        <Telegram/>
        <Globes/>
        {/* <GlobeMain/> */}
    </section>
  )
}
