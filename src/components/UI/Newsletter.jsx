import React from 'react';
import '../../styles/newsletter.css';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Newsletter = () => {
  return <section className="newsletter">
    <div className="container">
        <motion.div
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="newsletter__wrapper">
            <div className="newsletter_content">
                <h6 className="subtitle">Let's work</h6>
                <h2>Explore the <span className="highlight">hidden </span>
                techniques and subscribe!</h2>
            </div>
            <div className="newsletter__form">
                <input type="email" placeholder="Email" />
                <button className="secondary__btn subscribe__btn">Subscribe Now</button>
            </div>
        </motion.div>
    </div>
  </section>
}

export default Newsletter