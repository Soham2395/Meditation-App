import 'C:/Users/soham/meditation-app/src/App.css';
import React, { useState, useEffect } from 'react';
import Spinner from "react-spinkit";

import Header from 'C:/Users/soham/meditation-app/src/components/Header/Header.jsx';                                                    
import Hero from 'C:/Users/soham/meditation-app/src/components/UI/Hero.jsx';
import Counter from 'C:/Users/soham/meditation-app/src/components/UI/Counter.jsx';
import Services from 'C:/Users/soham/meditation-app/src/components/UI/Services.jsx';
import About from 'C:/Users/soham/meditation-app/src/components/UI/About.jsx';
import Team from 'C:/Users/soham/meditation-app/src/components/UI/Team.jsx';
import Blog from 'C:/Users/soham/meditation-app/src/components/UI/Blog.jsx';
import Testimonial from 'C:/Users/soham/meditation-app/src/components/UI/Testimonial.jsx';
import Newsletter from 'C:/Users/soham/meditation-app/src/components/UI/Newsletter.jsx';
import Footer from 'C:/Users/soham/meditation-app/src/components/Footer/Footer.jsx';

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