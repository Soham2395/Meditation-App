import React, { useState, useEffect, useMemo } from 'react';
import '../../styles/hero.css';
import heroDarkImg from '../../images/dark-hero-bg.png';
import lightImg from '../../images/light-hero-bg.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

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
          <motion.div 
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          className="hero__content">
            <div>
              <h2>We are creating perfect</h2>
              <h2>space for meditation to</h2>
              <h2 className="highlight">{highlightText}</h2>
            </div>
            <p className="description">Our app offers a variety of tools to help you reduce stress, improve focus, and enhance your overall well-being!</p>
            <div className="hero__btns">
              <Link to="/login" className="primary__btn">Get Started Now</Link>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          className="hero__img">
            <img src={theme === 'light-theme' ? lightImg : heroDarkImg} alt="hero-img" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
