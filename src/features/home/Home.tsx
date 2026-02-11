import Landing from '../landing/Landing';
import { Outlet } from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <>
      <Landing/>
      <About/>
      <Contact/>
      <Outlet/>
    </>
  )
}

export default Home