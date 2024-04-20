import React, { useState, useEffect, useMemo } from 'react';
import '../../styles/hero.css';
import heroDarkImg from '../../images/dark-hero-bg.png';
import lightImg from '../../images/light-hero-bg.png';

const Hero = ({ theme }) => {
  const [highlightText, setHighlightText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [highlightVisible, setHighlightVisible] = useState(true);

  const texts = useMemo(() => ['regain your focus', 'relax your mind', 'relieve your stress'], []);

  useEffect(() => {
    const textLength = texts[currentTextIndex].length;

    if (highlightVisible) {
      const timeout = setTimeout(() => {
        setHighlightText(texts[currentTextIndex].substring(0, highlightText.length + 1));
      }, 200); 

      if (highlightText.length === textLength) {
        setHighlightVisible(false);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setHighlightVisible(true);
        }, 1500); 
      }

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setHighlightText(highlightText.substring(0, highlightText.length - 1));
      }, 100); 

      if (highlightText.length === 0) {
        setHighlightVisible(true);
      }

      return () => clearTimeout(timeout);
    }
  }, [highlightText, highlightVisible, currentTextIndex, texts]);

  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We are creating perfect</h2>
              <h2>space for meditation to</h2>
              <h2 className="highlight">{highlightText}</h2>
            </div>
            <p className="description">Our app offers a variety of tools to help you reduce stress, improve focus, and enhance your overall well-being!</p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
          <div className="hero__img">
            <img src={theme === 'light-theme' ? lightImg : heroDarkImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
