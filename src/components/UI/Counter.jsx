import React from 'react'
import '../../styles/counter.css'

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
        <div className="counter__wrapper">
          {counterData.map((item,index)=>(
            <div className="counter__item" key={index}>
                <h3 className="counter__number">{item.number}+</h3>
                <div className="counter__title">{item.text}</div>
            </div>
          ))}
        </div>
    </div>
  </section>
}

export default Counter