import React from 'react';
import hero_10 from '../img/image00010.jpg';
import hero_11 from '../img/image00011.jpg';
import hero_12 from '../img/image00012.jpg';

const Land = () => {
  return (
    <section className='landing'>
           
           <div className='landing__grid'>
             
             <div className='landing__grid--composition composition'>
                 <div  className='div1'>
                     <img src={hero_11} alt='Photo 1' className='composition__img p1 '/>
                 </div>
                 <div className='div2'>
                          <img src={hero_10} alt='Photo 2' className='composition__img p2 '/>
                 </div>
                 <div className='div3'>
                     <img  src={hero_12} alt='Photo 3' className='composition__img p3 '/> 
                 </div>
             
             </div>
             
             </div> 
    
</section>
  )
}

export default Land

{/* <div className='landing__grid'>
             
<div className='landing__grid--composition composition'>
    <div  className='div1'>
        <img src={hero_11} alt='Photo 1' className='composition__img p1 '/>
    </div>
    <div className='div2'>
             <img src={hero_7} alt='Photo 2' className='composition__img p2 '/>
    </div>
    <div className='div3'>
        <img  src={hero_3} alt='Photo 3' className='composition__img p3 '/> 
    </div>

</div>

</div> */}