import React, { useEffect, useState } from 'react'
import Profile from '../Center/ContentBox/profile/Profile'
import Aboutme from '../Left/ContentBox/Aboutme/Aboutme'
import './Mobile.scss'
import HowIWork from '../Right/ContentBox/HowIWork/HowIWork'
import Skill from '../Right/ContentBox/SkillBox/Skill'
import Blog from '../Left/ContentBox/Blog/Blog'
import Telegram from '../Right/ContentBox/HowIWork/TelegramChannel/Telegram'
import Mentorship from '../Center/ContentBox/profile/Mentorship/Mentorship'
import Globes from '../Right/ContentBox/HowIWork/TelegramChannel/Globe/Globes'
import GetInTouch from '../Center/ContentBox/profile/GetinTouch/GetInTouch'
import ThankYou from '../Left/ContentBox/ThankYou/ThankYou'
import SThank from '../Sleft/SThank/SThank'
import Scroll from '../../../SCROLL/Scroll'
import useScrollListener from '../../../SCROLL/ScrollBehave'

export default function Mobile() {
    
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();
  
    // update classList of nav on scroll
    useEffect(() => {
      const _classList = [];
  console.log(scroll.lastY,scroll.y)
      if (scroll.y === 0)
        _classList.push("nav-bar--hidden");
  
      setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);
  return (
    <section className='mobile_Container'>
        <Scroll/>
        {/* <section className='setx'>
            <div  className={navClassList.join(" ")}>
            <div>name</div>
<div>up</div>
            <div>G</div>
            <div>@</div>
            <div>Dp</div> 
            </div>
          
        </section> */}
     <Profile/>
     <Aboutme/>
     <HowIWork/>
     <Skill/>
     <Blog/>
     <Telegram/>
     <Mentorship/>
     <Globes/>
     <GetInTouch/>
     <ThankYou/>
     <SThank/>
    </section>
  )
}
