import {useLayoutEffect, useRef} from 'react';



const Landing = () => {

  let cnt, up;
  const refThomas  = useRef(null);
  //const [headerState, setheaderState] = useState();
  useLayoutEffect(()=>{
    window.addEventListener('scroll', function(){
      const scrollh = window.pageYOffset;
      const nav = refThomas.current;  
      //const nah = nav.getBoundingClientRect().height ;
  

      if((window.pageYOffset <=70 )){
        
       // refThomas.current.style.opacity =1;
        console.log( 0.01 * window.pageYOffset);
        refThomas.current.style.opacity = 1 -( 0.56 * window.pageYOffset )  ;
        refThomas.current.style.transform = `translate3d(${0}px, ${window.pageYOffset}px, ${0}px)`;
        //reftitle.current.style.top =  `${window.pageYOffset}%`;

      }else if(window.pageYOffset >70){
        
        refThomas.current.style.opacity = 0  ;
  
      
      }
    })
  }, [cnt, up]);

  return (
    <section className='landing'>
           
    <div className='downIcon'>
       <span></span>
       <span></span>
       <span></span>
       
    </div>
   
    <div className='landing__thom' ref={refThomas}>
            <h1 className='thoma'>
               <span className='thoma__name'>Thomas Lo Presti</span>
               <span className='thoma__title'> photographe </span>
            </h1>
         
    </div>
    
</section>
  )
}

export default Landing