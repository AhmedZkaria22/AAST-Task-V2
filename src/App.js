import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/App.css';
import './HandelAnmy.js';
import { handelNavHeadFade } from './HandelAnmy.js';

import Navbar from './components/Navbar';
import AppCarousel from './components/AppCarousel';
import Campuses from './components/Campuses';
import Services from './components/Services';
import LatestNews from './components/LatestNews';
import Events from './components/Events';
import Deanery from './components/Deanery';
import Footer from './components/Footer';
import { FaAngleUp } from 'react-icons/fa';
import Chat from './components/Chat';
import popimg from './images/testing-center.jpg';
import { useState } from 'react';
import Header from './components/Header';
import HeaderSm from './components/HeaderSm';

function App() {
  const [wd, setWd] = useState(document.body.clientWidth);
  window.addEventListener('resize', ()=>{ setWd(document.body.clientWidth); });
  
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <HeaderSm/>
      <AppCarousel />
      <Campuses wd={wd}/>
      <Services />
      <LatestNews />
      <Events wd={wd}/>
      <Deanery />
      <Footer />
      <section id='popup'>
        <img src={popimg} alt='img' />
        <button onClick={(e) => {
          e.target.parentElement.style.display = 'none';
          handelNavHeadFade();
        }}>Close</button>
      </section>
      <Chat />
      <button className='btnTop' onClick={() => { window.scrollTo(0,0); }}> <FaAngleUp /> </button>
    </div>
  );
}

export default App;
