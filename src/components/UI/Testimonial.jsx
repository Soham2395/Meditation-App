import React from 'react';
import '../../styles/testimonial.css';

import Slider from 'react-slick';
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonial = () => {
  const settings={
    dots:false,
    infinite:true,
    speed:1000,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow:1,
    slidesToScroll:1,
    swipeToSlide:true,
  }
  return <section>
    <div className="container">
      <div className="slider__content-top">
        <h6 className="subtitle">Testimonials</h6>
        <h2>Trusted by more than <span className="highlight">2000 customers.</span></h2>
      </div>

      <div className="slider__wrapper">
      <Slider {...settings}>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusamus? Eius, veritatis. Ex aperiam, molestiae consequuntur quia, quis unde aliquid ipsa accusamus nostrum, optio ratione amet dolore cumque. Vero minus reiciendis unde nihil quo. Architecto debitis officiis maxime laboriosam sapiente!</p>
        <div className="customer__details">
          <div className="customer__img">
            <img src={ava01} alt=""/>
          </div>
          <div>
            <h5 className="customer__name">Jhon Doe</h5>
            <p className="description">CEO, Workcreation</p>
          </div>
        </div>
      </div>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusamus? Eius, veritatis. Ex aperiam, molestiae consequuntur quia, quis unde aliquid ipsa accusamus nostrum, optio ratione amet dolore cumque. Vero minus reiciendis unde nihil quo. Architecto debitis officiis maxime laboriosam sapiente!</p>
        <div className="customer__details">
          <div className="customer__img">
            <img src={ava02} alt=""/>
          </div>
          <div>
            <h5 className="customer__name">Jhon Doe</h5>
            <p className="description">Sr. Consultant</p>
          </div>
        </div>
      </div>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusamus? Eius, veritatis. Ex aperiam, molestiae consequuntur quia, quis unde aliquid ipsa accusamus nostrum, optio ratione amet dolore cumque. Vero minus reiciendis unde nihil quo. Architecto debitis officiis maxime laboriosam sapiente!</p>
        <div className="customer__details">
          <div className="customer__img">
            <img src={ava03} alt=""/>
          </div>
          <div>
            <h5 className="customer__name">Jhon Doe</h5>
            <p className="description">Production Engineer</p>
          </div>
        </div>
      </div>
    </Slider>
      </div>
    </div>
  </section>
}

export default Testimonial