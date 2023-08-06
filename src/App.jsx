import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
// import Experience from './component/experience/Experience';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import About from './component/about/About';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
