import React, { useEffect, useState } from "react";
import Profile from "../Center/ContentBox/profile/Profile";
import Aboutme from "../Left/ContentBox/Aboutme/Aboutme";
import "./Mobile.scss";
import HowIWork from "../Right/ContentBox/HowIWork/HowIWork";
import Skill from "../Right/ContentBox/SkillBox/Skill";
import Blog from "../Left/ContentBox/Blog/Blog";
import Telegram from "../Right/ContentBox/HowIWork/TelegramChannel/Telegram";
import Mentorship from "../Center/ContentBox/profile/Mentorship/Mentorship";
import Globes from "../Right/ContentBox/HowIWork/TelegramChannel/Globe/Globes";
import GetInTouch from "../Center/ContentBox/profile/GetinTouch/GetInTouch";
import ThankYou from "../Left/ContentBox/ThankYou/ThankYou";
import SThank from "../Sleft/SThank/SThank";
import Scroll from "../../../SCROLL/Scroll";
import ArrowUpSLineIcon from "remixicon-react/ArrowUpSLineIcon";
import pr from "./../../../Assets/Imgs/abupic.jpg";
import AtLineIcon from "remixicon-react/AtLineIcon";
import useScrollListener from "../../../SCROLL/ScrollBehave";

export default function Mobile() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = ["menu"];
    if (scroll.y === 0) _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y]);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1043) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  const handleClickScroll = (data) => {
    const element = document.getElementById(data);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
     console.log(element)
  };

  return (
    <section className="mobile_Container">
      <Scroll handleClickScroll={handleClickScroll} />
      <div className={navClassList.join(" ")}>
        <div className="inside">
          <div className="Name_container">
            <h1>Abubacker Siddique</h1>
            <h2>UI/UX web Developer</h2>
          </div>
          <div className="icon_conatainer">
            <p
              onClick={() => scrollToTop()}
              className={`icons ${visible ? "show" : "hide"}`}
            >
              <ArrowUpSLineIcon />
            </p>
            <p className="icons bg">
              <p className="G">G</p>
            </p>
            <p className="icons at">
              <AtLineIcon />
            </p>
            <p className="iconP">
              <img src={pr} />
            </p>
          </div>
        </div>
      </div>
    <Profile  />
      <div id="aboutme"><Aboutme /></div>
     <div id="howiwork"> <HowIWork /></div> 
    <div id="skill"> <Skill /></div>  

<div id="blog">      <Blog /></div>
   <div id="telegram">  <Telegram /></div>  
     <div id="mentorship"> <Mentorship /></div>
<Globes />
     <div id="getintouch"> <GetInTouch /></div>
      <ThankYou />
      <SThank />
    </section>
  );
}
