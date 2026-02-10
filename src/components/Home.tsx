import Landing from './Landing';
import { Outlet } from 'react-router-dom';
import About from './About';
import Connect from './Connect';

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