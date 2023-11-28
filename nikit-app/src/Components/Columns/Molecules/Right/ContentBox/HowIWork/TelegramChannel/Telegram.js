import React from 'react'
import'./Telegram.scss'
import Globes from './Globe/Globes'
import StackFillIcon from "remixicon-react/StackFillIcon";
import PlugLineIcon from "remixicon-react/PlugLineIcon";
import LinkIcon from "remixicon-react/LinkIcon";
import Download2LineIcon from "remixicon-react/Download2LineIcon";
export default function Telegram() {
     const data=[]
  return (
<section className='Telegram_Container'>
<div className='upperLayer'>
       <div className='Topsection'>
            <div className='channel'>My Telegram Channel</div>
        </div>
        <div className='Title'>
            Designer Bookmarks
        </div>
        <div className='about'>Here I share interesting stuff for designers.</div>
</div>
<div className='section_container'>
  <div className='data'>
<div className='setup'><StackFillIcon/><p>Ui-kits, icons, mockups, fonts,<br/> illustrations, 3D content and more.</p></div>
<div className='setup'><PlugLineIcon/><p>Useful plugins/materials for Figma<br/> and for other programs.</p></div>
<div className='setup'><LinkIcon /><p>Links to interesting sites for you..</p></div>
<div className='setup'><Download2LineIcon/><p>Download files directly. All free!</p></div>
  </div>

</div>
<div className='btnmain'><div className='btnCota'>
Subscribe and get inspried
    </div></div>
<div className='bg'></div>
<div className='bgcolor'></div>
<div>
{/* <Globes/> */}
</div>
</section>
  )
}
