import React from 'react'
import './Profile.scss'
 import nikit_profilepic from'./../../../../../Assets/Imgs/nikit_profilepic.jpg'
 import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
 import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
 import LinkedinBoxLineIcon from "remixicon-react/LinkedinBoxLineIcon";
 import UnsplashLineIcon from "remixicon-react/UnsplashLineIcon";
 import AppleLineIcon from "remixicon-react/AppleLineIcon";
 import SpotifyLineIcon from "remixicon-react/SpotifyLineIcon";
export default function Profile() {
  return (
<section className='profile_Container'>
    <div className='ims'>
    <img src={nikit_profilepic} className='imgsection'/>
    </div>
       
<div className='gradient'></div>
<div className='set'></div>
<div className='profile_textContainer'>
    <div className='name'>Nikita Ermilov</div>
    <div className='socialnetworkContainer'>
<div className='circle'><FacebookCircleLineIcon size={22}/></div>
<div className='circle'><InstagramLineIcon size={22}/></div>
<div className='circle'><LinkedinBoxLineIcon size={22}/></div>
<div className='circle'><UnsplashLineIcon size={22}/></div>
<div className='circle'><AppleLineIcon size={22}/></div>
<div className='circle'><SpotifyLineIcon size={22}/></div>
    </div>
</div>
</section>
  )
}
