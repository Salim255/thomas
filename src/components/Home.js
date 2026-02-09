import React,{useEffect} from 'react';
import {Header} from './Header';
import Landing from './Landing';
import Footer  from './Footer';
import Test from './Test';
import { Outlet } from 'react-router-dom';
import About from './About';
import Conect from './Conect';

const Home = () => {
  

  return (
    <>
        <Landing/>
        <About />
        <Conect/>
        <Outlet/>
    </>
  )
}

export default Home