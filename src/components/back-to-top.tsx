import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
    let[scroll,setScroll] = useState<boolean>(false)

    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
      const handlerScroll = () => {
          const scrolled = window.scrollY;
          setScroll(scrolled > 50);
      };

      window.addEventListener('scroll', handlerScroll);
      return () => {
          window.removeEventListener('scroll', handlerScroll);
      };
  }, []);
  return (
    <Link onClick={()=>scrollToTop()} className={`top-scroll ${scroll ? 'd-flex' : 'd-none'}`} title="Back to top" to="#" ><FiArrowUp className="ti-arrow-up backIcon"/></Link>
  )
}
