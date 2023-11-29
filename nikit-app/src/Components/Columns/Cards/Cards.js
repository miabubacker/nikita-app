import React, { useEffect, useState } from "react";
import Centre from "../Molecules/Center/Centre";
import Right from "../Molecules/Right/Right";
import Leftmain from "../Molecules/Left/Leftmain";

import "./Cards.scss";
import Sleft from "../Molecules/Sleft/Sleft";
import Sright from "../Molecules/Sright/Sright";
import Mobile from "../Molecules/Mobile/Mobile";
export default function Cards() {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);
  
    return matches;
  }
  const isSmall = useMediaQuery('(min-width: 767px) and (max-width: 1199px)');
  const isMobile = useMediaQuery('(min-width: 319px) and (max-width: 767px)');

  
  return (
    <>
     {<section className="Cards_container">
      <Leftmain />
      <Centre />
      <Right />
      </section>
}
      <>
      {isSmall &&<section className="Cards_container">
        <Sleft/>
        <Sright/>
        </section>}
      </>
     <>
     {isMobile&&<section className="Cards_container"><Mobile/></section>}
     </>
  
    </>
   
  );
}
