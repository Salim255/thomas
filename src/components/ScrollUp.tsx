import React,{useRef,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import { ImShift} from "react-icons/im";


const ScrollUp = () => {
  const refUp  = useRef(null);
  //const [headerState, setheaderState] = useState();
  useEffect(()=>{
    window.addEventListener('scroll', function(){
      const scrollh = window.pageYOffset;
      const nav = refUp.current;  
      const nah = nav.getBoundingClientRect().height ;
      

      if(scrollh > 100){
      
        refUp.current.classList.add('scroolup__hidee');
        //setheaderState(headerState);
      }else{
      
        refUp.current.classList.remove('scroolup__hidee');
        
        //setheaderState(headerState);
      }
    })
  }, []);
  return (
    <div className='scroolup ' ref={refUp} >
        <a href='#welcome'><ImShift/></a>
  
      </div>
  )
}

export default ScrollUp