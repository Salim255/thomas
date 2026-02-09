import React from 'react';
import {Link} from 'react-router-dom';
import hero_1 from  '../img/image00004.jpg';
import hero_2 from '../img/image00001.jpg';
import hero_3 from '../img/image00002.jpg'
import hero_4 from '../img/image00003.jpg';
import hero_5 from '../img/image00005.jpg'
import hero_6 from '../img/image00006.jpg'
import hero_7 from '../img/image00007.jpg'
import hero_8 from '../img/image00008.jpg'
import hero_9 from '../img/image00009.jpg'
import hero_10 from '../img/image00010.jpg'
import hero_11 from '../img/image00011.jpg'
import hero_12 from '../img/image00012.jpg'
import About from './About';
import Welcome from './Welcome';
import {images} from './datas';
import Test from './Test';


const Gallery = () => {
/*   const displayLogos = logos.map((logo) => (
    <figure key={logo} className='gallery__item--1'>
        <img
            key={logo}
            src={require(`../img/image0000${logo}.png`).default}
            alt={`${logo} logo`}
            className='gallery__img'
        />
    </figure>
)); */
  return (
    <section className='section gallery'> 
          <Test/>
          <h2>Gallery</h2>
           <div className='gallery__space'>
      
           </div>
           
           
               { images.map((img) =>{
             
                return(
                  <Link to={`/gallery/${img.id}`}>
                      <figure key={img.id} className='gallery__item--1'>
                        <img src={img.url} alt='SingleImage' className='gallery__img'/>
                        
                      </figure>
                  </Link>
                );

               })}
          
           
    </section>
  )
}

export default Gallery