import React from "react";
import "./Skill.scss";
import PaypalFillIcon from "remixicon-react/PaypalFillIcon";
import PinterestFillIcon from "remixicon-react/PinterestFillIcon";
import SlackFillIcon from "remixicon-react/SlackFillIcon";
import ReactjsFillIcon from "remixicon-react/ReactjsFillIcon";
import Notification2FillIcon from "remixicon-react/Notification2FillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MediumFillIcon from "remixicon-react/MediumFillIcon";
 import figma from './../../../../../Assets/Imgs/figmaicon.svg'
export default function Skill() {
  return (
    <section className="skillTool_Container">
      <div className="heading">
        <p>
          Skills & <span>Tools</span>
        </p>
      </div>
      {/* <div class="marquee"> */}
  {/* <div className="roll">
    <span className="btns">ui/ux Designer</span>
    <span>You spin me right round, baby. Like a record, baby.</span>
  </div> */}
{/* </div> */}
      <div className="main_spinner">
<div className="roll">
    <div className="btns">ui/ux Designer</div>
    <div className="btns">Interaction Test</div>
    <div className="btns">Design Sprint</div>
    <div className="btns">Interaction Design</div>
    <div className="btns">Project Mangement</div>
    <div className="btns">Workshop</div>
    <div className="btns">Usablity Testing</div>
    <div className="btns">ui/ux Designer</div>
</div>
<div className="Middle">
<div className="btns"><Notification2FillIcon/></div>
<div className="btns"><PinterestFillIcon/></div>
<div className="btns"><PaypalFillIcon/></div>
<div className="btns"><SlackFillIcon/></div>
<div className="btns"><ReactjsFillIcon/></div>
<div className="btns"><GithubFillIcon/></div>
<div className="btns"><MediumFillIcon/></div>
<div className="btns"><Notification2FillIcon/></div>
<div className="btns"><PinterestFillIcon/></div>
<div className="btns"><PaypalFillIcon/></div>
<div className="btns"><SlackFillIcon/></div>
<div className="btns"><ReactjsFillIcon/></div>
<div className="btns"><GithubFillIcon/></div>
<div className="btns"><MediumFillIcon/></div>
</div>
<div className="roll lower">
<div className="btns">Ui Design</div>
    <div className="btns">Web Desgin</div>
    <div className="btns">No Code</div>
    <div className="btns">UX Reach</div>
    <div className="btns">UI Reach</div>
    <div className="btns">User Testing</div>
    <div className="btns">Leadership</div>
    <div className="btns">Mentaion</div>

</div>
      </div>
    </section>
  );
}
