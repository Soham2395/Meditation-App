import React from 'react';
import '../../styles/counter.css';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const counterData=[
  {
    number:20,
    text:'Trainers'
  },
  {
    number:'2k',
    text:'Clients'
  },
  {
    number:1000,
    text:'Recuring Clients'
  }
]
const Counter = () => {
  return <section className="counter" id="projects">
    <div className="container">
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="counter__wrapper">
          {counterData.map((item,index)=>(
            <div className="counter__item" key={index}>
                <h3 className="counter__number">{item.number}+</h3>
                <div className="counter__title">{item.text}</div>
            </div>
          ))}
        </motion.div>
    </div>
  </section>
}

export default Counter