import './App.css';
import React, { useState, useEffect } from 'react';
import Spinner from "react-spinkit";

import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  }

  useEffect(() => {
    document.body.className = theme;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <h1>Improve your focus</h1>
          <Spinner name="ball-spin-fade-loader" color="#379cf6"/>
        </div>
      ) : (
        <>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Hero theme={theme} />
          <Counter />
          <Services />
          <About />
          <Team />
          <Blog />
          <Testimonial />
          <Newsletter />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;