import React from 'react';
import '../../styles/services.css';

const ServiceData=[
    {
        icon:'ri-apps-line',
        title:'1-1 Sessions',
        desc:'Lorem ipsum dolor sit amet elit. Quam, reprehenderit. Illum, ullam? Iusto quisquam repudiandae saepe possimus architecto rem repellendus.'
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Yoga Classes',
        desc:'Lorem ipsum dolor sit amet elit. Quam, reprehenderit. Illum, ullam? Iusto quisquam repudiandae saepe possimus architecto rem repellendus.'
    },
    {
        icon:'ri-landscape-line',
        title:'Exercises',
        desc:'Lorem ipsum dolor sit amet elit. Quam, reprehenderit. Illum, ullam? Iusto quisquam repudiandae saepe possimus architecto rem repellendus.'
    },
    {
        icon:'ri-rocket-line',
        title:'Workshops',
        desc:'Lorem ipsum dolor sit amet elit. Quam, reprehenderit. Illum, ullam? Iusto quisquam repudiandae saepe possimus architecto rem repellendus.'
    }
]

const Services = () => {
  return <section id="service">
    <div className="container">
        <div className="services__top-content">
            <h6 className="subtitle">Our Services</h6>
            <h2>Explore guided sessions with </h2>
            <h2 className="highlight">our experienced trainers</h2>
        </div>
        <div className="service__item-wrapper">
            {ServiceData.map((item,index)=>(
                <div className="services__item" key={index}>
                    <span className="service__icon">
                        <i className={item.icon}></i>
                    </span>
                    <h3 className="service__title">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  </section>
}

export default Services