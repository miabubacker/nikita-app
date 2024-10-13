import React from "react";
import "./Aboutme.scss";
import BehanceFillIcon from "remixicon-react/BehanceFillIcon";
import ArrowRightUpLineIcon from "remixicon-react/ArrowRightUpLineIcon";
import react from './../../../../../Assets/Imgs/react.svg'
import css3 from './../../../../../Assets/Imgs/css3.svg'
// import dribbble from './../../../../../Assets/Imgs/dribbbleicon.svg'
import js from './../../../../../Assets/Imgs/js.svg'

import html5 from './../../../../../Assets/Imgs/html5.svg'
import redux from './../../../../../Assets/Imgs/redux.svg'
 
import sass from './../../../../../Assets/Imgs/sass.svg'

export default function Aboutme() {
  return (
    <section className="aboutme_Container">
      <div className="about_me">
        <h2>UI/UX Developer</h2>
        <h1>My Development Concepts</h1>
        <div>
          <p>
          I’m a Digital Product Developer. Building beautiful, responsive interfaces and delivering seamless user interactions is my passion. I describe myself as a creative problem solver who bridges the gap between design and development.
          </p>
        </div>
      </div>
      <div className="buttons">
      <div className="button_container">
          <div className="logo_text">
            {/* <BehanceFillIcon className="circle" /> */}
            <img className="imgs" src={html5}/>
            <p>HTML5</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
            {/* <BehanceFillIcon className="circle" /> */}
            <img className="imgs" src={css3}/>
            <p>Css3</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
          <img className="imgs" src={js}/>
            <p>JavaScript</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
          <img className="imgs" src={react}/>
            <p>React js</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
          <img className="imgs" src={redux}/>
            <p>Redux</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
        <div className="button_container">
          <div className="logo_text">
          <img className="imgs" src={sass}/>
            <p>Sass</p>
          </div>
          <ArrowRightUpLineIcon color="#FFFFFF" />
        </div>
      </div>
    </section>
  );
}
