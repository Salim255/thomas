import React from 'react';
import {Header} from './header/Header';
import Landing from '../../features/landing/Landing';
import Footer  from './footer/Footer';
import {StyleNavabr} from './StyleNavbar'
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <StyleNavabr/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default SharedLayout;