import React, {useLayoutEffect, useRef} from 'react'

const Welcome = () => {
  let cnt = 0;
  let up =0;
  const reftitle  = useRef(null);
  //const [headerState, setheaderState] = useState();
  useLayoutEffect(()=>{
    window.addEventListener('scroll', function(){
      const scrollh = window.pageYOffset;
      const nav = reftitle.current;  
      const nah = nav.getBoundingClientRect().height ;
      

      if((window.pageYOffset <= 380)){
        
        reftitle.current.style.opacity =1;
        
        reftitle.current.style.transform = `translate3d(${0}px, ${window.pageYOffset}px, ${0}px)`;
        //reftitle.current.style.top =  `${window.pageYOffset}%`;

      }else if(window.pageYOffset > 380){
        
        reftitle.current.style.opacity =0;
      
      }
    })
  }, [cnt, up]);
  return (
    <div className='welcome' id='welcome'>
            <div className='welcome__background'></div>
              <h1 className='welcome__header' ref={reftitle} >
                  <span className=' welcome__lille'> Lille</span> 
                  <span  className='welcome__title '>En Noir et Blanc</span>
              </h1>

        
    </div>
  )
}

export default Welcome