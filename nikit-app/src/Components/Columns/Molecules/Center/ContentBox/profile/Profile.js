import React from 'react'
import './Profile.scss'
 import abupic from'./../../../../../Assets/Imgs/abupic.jpg'
 import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
 import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
 import LinkedinBoxLineIcon from "remixicon-react/LinkedinBoxLineIcon";
 import UnsplashLineIcon from "remixicon-react/UnsplashLineIcon";
 import AppleLineIcon from "remixicon-react/AppleLineIcon";
 import SpotifyLineIcon from "remixicon-react/SpotifyLineIcon";
 import GithubLineIcon from "remixicon-react/GithubLineIcon";
 import MailLineIcon from "remixicon-react/MailLineIcon";
  
export default function Profile() {
  const popup=(platform)=>{
    let url;
     if(platform==='facebook'){
        url=`https://www.facebook.com/abu1234567890abu/`
      window.open(url, '_blank'); //
     }
      else if(platform==='insta'){
      url=`https://www.instagram.com/duskyboy_abu_abs/`
       window.open(url, '_blank'); //
     }
     else if(platform==='github'){
      url=`https://github.com/miabubacker`
      window.open(url, '_blank'); //
     }
     else if(platform==='linderin'){
      url=`https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile`
      window.open(url, '_blank'); //
     }
     else if(platform==='gmail'){
       let email='miabubacker98@gmail.com'
      window.location.href = `mailto:${email}`;

      // window.open(url, '_blank'); //
     }
            
console.log(platform,'chk');
  }

  return (
<section className='profile_Container'>
    <div className='ims'>
    <img src={abupic} className='imgsection'/>
    </div>
       
<div className='gradient'></div>
<div className='set'></div>
<div className='profile_textContainer'>
    <div className='name'>Abubacker Siddique</div>
    <div className='socialnetworkContainer'>
<div className='circle'>
  
  <FacebookCircleLineIcon size={22} onClick={()=>popup('facebook')}/> 
  </div>
<div className='circle'><InstagramLineIcon size={22} onClick={()=>popup('insta')}/></div>
<div className='circle'><LinkedinBoxLineIcon size={22} onClick={()=>popup('linderin')}/></div>
{/* <div className='circle'><UnsplashLineIcon size={22} onClick={()=>popup('unsplish')}/></div> */}
<div className='circle'><GithubLineIcon size={22} onClick={()=>popup('github')}/></div>
<div className='circle'><MailLineIcon size={22} onClick={()=>popup('gmail')}/></div>
    </div>
</div>
</section>
  )
}
