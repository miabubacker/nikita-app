import React from "react";
import "./Skill.scss";
import NotificationFillIcon from "remixicon-react/NotificationFillIcon";
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
    <div className="btns">ui/ux Designer</div>
    <div className="btns">ui/ux Designer</div>
    <div className="btns">ui/ux Designer</div>
</div>
<div className="roll_Middile">
{/* <div className="btns"><NotificationBadgeFillIcon/></div> */}
<i className="fa fa-shopping-cart"></i>
</div>
<div className="roll_Lower"></div>
      </div>
    </section>
  );
}
