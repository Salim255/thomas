import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/thom.png';

export const Header = () => {
  const refContainer  = useRef(null);
  //const [headerState, setheaderState] = useState();
/*   useLayoutEffect(()=>{
    window.addEventListener('scroll', function(){
      const scrollh = window.pageYOffset;
      const nav = refContainer.current;  
      const nah = nav.getBoundingClientRect().height ;
    

      if(scrollh > nah){
       
        refContainer.current.classList.remove('header__nofixed');
        refContainer.current.classList.add('header__fixed');
        //setheaderState(headerState);
      }else{
        
        refContainer.current.classList.remove('header__fixed');
        refContainer.current.classList.add('header__nofixed');
        //setheaderState(headerState);
      }
    })
  }, []); */
  return (
    <div className='header' id='header' ref={refContainer}>
       
            <ul className='nav'>
                    <li className='nav__item'><Link to='/' className='nav__link'><img src={logo} alt='thom' className='header__logo'/></Link></li>
                    <li  className='nav__item'><Link to='#home' className='nav__link'>about us</Link> </li>
                    <li  className='nav__item'><Link to='#conect' className='nav__link nav__contact '>contact</Link></li>
            </ul>
       
    </div>
    
  )
}
