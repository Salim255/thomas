import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { images } from '../../../shared/data/data';

const SingleImage = () => {
    const {imageId} = useParams();
   // const img =  images.find((elm) => elm.id === imageId);

    //const {id, url} = img;
  return (
    <section className='section singleImage'>
    
        <Link to='/products'>Back to images</Link>
    </section>
  )
}

export default SingleImage