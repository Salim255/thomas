import React from 'react';

import Footer  from './Footer';
import {StyleNavabr} from './StyleNavbar'
import { Outlet } from 'react-router-dom';

const SharedGalleryLayout = () => {
  return (
    <>
       <h2>gallery</h2>
        <Outlet/>
     
    </>
  )
}


export default SharedGalleryLayout