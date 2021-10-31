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
  const handelDown = (ev) => {
    const ch = document.querySelector('#chat .chat-main');
    let prevX = ev.clientX;
    let prevY = ev.clientY;

    const handMove = (e) => {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = ch.getBoundingClientRect();
        ch.style.left = ''+(rect.left - newX)+'px';
        ch.style.top = ''+(rect.top - newY)+'px';
        ch.style.userSelect = 'none';
        ch.style.cursor = 'grabbing';

        prevX = e.clientX;
        prevY = e.clientY;
    }

    const handUp = () => {
        ch.style.cursor = 'grab';
        window.removeEventListener('mousemove', handMove);
        window.removeEventListener('mouseup', handUp);
    }
    window.addEventListener('mousemove', handMove);
    window.addEventListener('mouseup', handUp);
  }
  
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
      <Chat handelDown={handelDown}/>
      <button className='btnTop' onClick={() => { window.scrollTo(0,0); }}> <FaAngleUp /> </button>
    </div>
  );
}

export default App;
