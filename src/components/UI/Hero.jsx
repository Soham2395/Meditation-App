import React from 'react';
import '../../styles/hero.css';
import heroDarkImg from '../../images/hero-img.png';
import lightImg from '../../images/light-hero-bg.jpg';

const Hero = ({theme}) => {
  return (
    <section className="hero__section">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div>
                        <h2>We are creating perfect</h2>
                        <h2>space for meditation to</h2>
                        <h2 className="highlight">improve your focus</h2>
                    </div>
                    <p className="description">Our app offers a variety of tools to help you reduce stress, improve focus, and enhance your overall well-being!</p>
                    <div className="hero__btns">
                        <button className="primary__btn">Get Started Now</button>
                        <button className="secondary__btn">Discover More</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={theme==='light-theme' ?lightImg:heroDarkImg} alt="hero-img"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero