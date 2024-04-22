import React from 'react';
import '../../styles/blog.css';

import videoImg from '../../images/video.png';
import articleImg from '../../images/article.png';
import caseStudy from '../../images/case-study.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const blogData=[
    {
        imgUrl:videoImg,
        title:'Video',
        desc:'To learn more about meditation. Watch some videos f....',
        linkUrl:'#'
    },
    {
        imgUrl:articleImg,
        title:'Articles',
        desc:'Do you want to relieve your stress? Lets talk....',
        linkUrl:'#'
    },
    {
        imgUrl:caseStudy,
        title:'Case Study',
        desc:'Boost your productivity rate with us....',
        linkUrl:'#'
    },
]

const Blog = () => {
  return <section id="blog" className="blog">
    <div className="container">
        <motion.div
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="blog__top-content">
            <h6 className="subtitle">Our blog</h6>
            <h2>Let's have a look from our <span className="highlight">recent blog</span></h2>
        </motion.div>
        <div className="blog__wrapper">
            {
                blogData.map((item,index)=>(
                    <motion.div
                    variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                    className="blog__item" key={index}>
                        <h3>{item.title}</h3>
                        <div className="blog__img">
                            <img src={item.imgUrl} alt=""/>
                        </div>
                        <p className="description blog__desc">
                            {item.desc}
                        </p>
                        <div>
                            <a href={item.linkUrl} className="learn__more">
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </div>
  </section>
}

export default Blog