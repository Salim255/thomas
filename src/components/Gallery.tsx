import {Link} from 'react-router-dom';
import {images }from './data';

const Gallery = () => {
  return (
    <section className='section gallery'> 
     
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