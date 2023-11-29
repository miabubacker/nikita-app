import React, { useEffect, useState } from 'react'
import './ThankYou.scss'
export default function ThankYou() {
  
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
  return (
<section className='Thankyou_Container'>
    <div className='icon'>🖖</div>
    <div className='thanks_text'>
        <p>Thank</p>
        <p>you for</p>
        <p>watching!</p>
        </div>
        <div className='info_bg'>© Design by Nikita Ermilov • 2023</div>
</section>
  )
}
