import React from 'react'
import'./Sright.scss'
import HowIWork from '../Right/ContentBox/HowIWork/HowIWork'
import Skill from '../Right/ContentBox/SkillBox/Skill'
import Telegram from '../Right/ContentBox/HowIWork/TelegramChannel/Telegram'
import GetInTouch from '../Center/ContentBox/profile/GetinTouch/GetInTouch'
import Globes from '../Right/ContentBox/HowIWork/TelegramChannel/Globe/Globes'
import ThankYou from '../Left/ContentBox/ThankYou/ThankYou'
export default function Sright() {
  return (
    <section className='Sright_container'>
        <HowIWork/>
        <Skill/>
        <Telegram/>
        <GetInTouch/>
        <Globes/>
        <ThankYou/>
        
    </section>
  )
}
