import React from 'react'
import './HowIWork.scss'
import CollapseComponent from './Collapse/CollapseComponent'
export default function HowIWork() {
     const data=[{title:"Strategy",about:"Asking Questions. Before Jumping into designing I always make sure that we're asking the right questions and trying to accomplish the right challenges. This stage includes market research, competitive analyses, consulting and exploring possible solutions."}
    ,
    {title:"Design",about:"Problem solving. To me design is all about problem solving. This is where we're trying to come up with solutions for the challenges and questions that we formed during the previous phase."},
    {title:"Prototyping & Development",about:"Bringing Designs to life. Since I'm a designer who can code too, I can easily work in close collaboration with developers up until the finish line and beyond. In case of web projects I also do front-end development."}
,{title:"Quality assurance",about:"Transparent process. Complete overview of my design process through regular meetings. After the initial design versions I'm happy to do user testing with your customers to ensure the best possible solutions for their needs."}]
  return (
  <section className='howiWork_Container'>
    <div className='workContainer'>
        <div className='topLayer'>
            <div className='mydesign'>My design process</div>
            <div><h2>How I Work</h2></div>
            <p className='content'>When it comes to design I always like to approach projects from a broader perspective, considering business goals, user needs, feedbacks as well as the overall feel and aesthetic of the end-to-end experience.</p>
        </div>
    </div>
    <div className='collapse'>
         {data.map((value,index)=><React.Fragment key={index}>
            <CollapseComponent value={value} index={index}/>
         </React.Fragment>)}
           
        </div>
  </section>
  )
}
