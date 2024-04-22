import React from 'react';
import '../../styles/about.css';
import aboutImg from '../../images/about-us.jpg';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const chooseData=[
    {
        icon:'ri-wifi-line',
        title:'Practice Mindfulness',
        desc:'Be in the moment with our mindfulness exercises. Cultivate awareness, acceptance and a deeper connection with yourself.'
    },
    {
        icon:'ri-team-line',
        title:'Relaxation Techniques',
        desc:'Discover relaxation techniques such as deep breathing, progressive muscle relaxation, and visualization to help you unwind.'
    },
    {
        icon:'ri-customer-service-2-line',
        title:'Track Your Progress',
        desc:'Track your meditation habits and see your progress over time. Our app helps you stay motivated to your mindfulness practice.'
    }
]
const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about__wrapper">
            <motion.div
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Choose from a range of guided </h2>
            <h2 className="highlight">meditation sessions</h2>
            <p className="description about__content-desc">
            Choose from a range of guided meditation sessions designed to meet your needs. Whether you're looking to relax, reduce anxiety, or improve sleep, we have sessions for every purpose and experience level.
            </p>
            <div className="choose__item-wrapper">
                {chooseData.map((item,index)=>(
                    <div className="choose__us-item">
                        <span className="choose__us-icon">
                            <i class={item.icon}></i>
                        </span>
                        <div>
                            <h4 className="choose__us-title">{item.title}</h4>
                            <p className="description">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className="about__img">
                <img src={aboutImg} alt=""/>
            </motion.div>
        </div>
    </div>
  </section>
}

export default About