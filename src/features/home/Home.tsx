import Landing from '../landing/Landing';
import { Outlet } from 'react-router-dom';
import About from '../about/About';
import Connect from '../contact/Contact';

const Home = () => {
  return (
    <>
      <Landing/>
      <About />
      <Connect/>
      <Outlet/>
    </>
  )
}

export default Home