import React from "react";
import "./Aboutme.scss";
import BehanceFillIcon from "remixicon-react/BehanceFillIcon";
import ArrowRightUpLineIcon from "remixicon-react/ArrowRightUpLineIcon";
import behance from './../../../../../Assets/Imgs/behance.png'
import figmaicon from './../../../../../Assets/Imgs/figmaicon.svg'
// import dribbble from './../../../../../Assets/Imgs/dribbbleicon.svg'
import dribbble from './../../../../../Assets/Imgs/dribbble.svg'

export default function Aboutme() {
  return (
    <section className="aboutme_Container">
      <div className="about_me">
        <h2>UI/UX Designer</h2>
        <h1>My Design Concepts</h1>
        <div>
          <p>
            I’m a Digital Product Designer. Creating beautiful interfaces and
            providing intuitive user interactions is my passion. I describe
            myself as a creative problem solver.
          </p>
        </div>
      </div>
      <div className="buttons">
        <div className="button_container">
          <div className="logo_text">
            {/* <BehanceFillIcon className="circle" /> */}
            <img className="imgs" src={behance}/>
            <p>Behance</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
          <img className="imgs" src={dribbble}/>
            <p>dribbble</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
          <img className="imgs" src={figmaicon}/>
            <p>Figma</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
      </div>
    </section>
  );
}
