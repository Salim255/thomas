import React from 'react';
import {Header} from './Header';
import Landing from './Landing';
import Footer  from './Footer';
import {StyleNavabr} from './StyleNavbar'
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
       < StyleNavabr/>
        
        <Outlet/>
        <Footer/>
    </>
  )
}

export default SharedLayout;