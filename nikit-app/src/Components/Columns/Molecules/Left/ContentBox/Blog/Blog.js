import React from 'react'
import './Blog.scss';
import ArrowRightUpLineIcon from "remixicon-react/ArrowRightUpLineIcon";
export default function Blog() {
     const overviewData=[{title:"Preparing for the interview",detail:"Position of ui/ux designer"},
     {title:"Crafting landing page",detail:"From idea to realization"},
     {title:"Design System",detail:"What it is and what it's for "},
     {title:"Usability Testing",detail:"Why it's necessary"}]
  return (
<section className='blog_Container'>
    <div className='blogmain'>
        <div className='topLayer'>
            <div className='mydesign'>BLOG</div>
            <div><h2>My Thoughts, Ideas<br/>and Reflections</h2></div>
            <p className='content'>Here you'll find a treasure trove of articles filled with ideas, inspiration, tips, design processes and more.</p>
        </div>
    </div>
    <div className='overview'>
{overviewData.map((data,index)=><React.Fragment key={index}>
<div className='overviewBtnContainer'>
   <div className='aboutmain'>
<p className='title'>{data.title}</p>
<span>{data.detail}</span>
   </div>
   <div><ArrowRightUpLineIcon color='white' size={26}/></div>
</div>
</React.Fragment>)}
    </div>
  </section>
  )
}



