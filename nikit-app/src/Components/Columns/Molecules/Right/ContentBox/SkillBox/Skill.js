import React from "react";
import "./Skill.scss";
import PaypalFillIcon from "remixicon-react/PaypalFillIcon";
import PinterestFillIcon from "remixicon-react/PinterestFillIcon";
import SlackFillIcon from "remixicon-react/SlackFillIcon";
import ReactjsFillIcon from "remixicon-react/ReactjsFillIcon";
import Notification2FillIcon from "remixicon-react/Notification2FillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MediumFillIcon from "remixicon-react/MediumFillIcon";
import Html5FillIcon from 'remixicon-react/Html5FillIcon';
import Css3FillIcon from 'remixicon-react/Css3FillIcon';
 import figma from './../../../../../Assets/Imgs/figmaicon.svg'
export default function Skill() {
  return (
    <section className="skillTool_Container">
      <div className="heading">
        <p>
          Skills & <span>Tools</span>
        </p>
      </div>
      <div className="main_spinner">
<div className="roll">
<div className="btns">UI/UX Developer</div>
<div className="btns">HTML5 / Css3</div>
<div className="btns">JavaScript</div>
<div className="btns">React</div>
<div className="btns">Redux</div>
<div className="btns">Sass.css</div>
<div className="btns">Tailwind</div>
<div className="btns">GitHub</div>
<div className="btns">Bitbucket</div>
<div className="btns">Firebase</div>
</div>
<div className="Middle">
<div className="btns"><Html5FillIcon/></div>
<div className="btns"><Css3FillIcon/></div>
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
<div className="btns">Node.js</div>
<div className="btns">MongoDB</div>
<div className="btns">Express.js</div>
<div className="btns">Antd</div>
<div className="btns">lottie</div>
<div className="btns">moments</div>
<div className="btns">Video.js</div>
<div className="btns">Shaka Player</div>
<div className="btns">Mentorship</div>

</div>
      </div>
    </section>
  );
}
