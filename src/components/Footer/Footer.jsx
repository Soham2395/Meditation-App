import React from 'react';
import './footer.css';

const quickLinks01=[
    {
        path:'#',
        display:'1-1 Sessions'
    },
    {
        path:'#',
        display:'Group Sessions'
    },
    {
        path:'#',
        display:'Exercises'
    }
]
const quickLinks02=[
    {
        path:'#',
        display:'Pricing'
    },
    {
        path:'#',
        display:'Documentation'
    },
    {
        path:'#',
        display:'Support'
    }
]
const quickLinks03=[
    {
        path:'#about',
        display:'About'
    },
    {
        path:'#',
        display:'Jobs'
    },
    {
        path:'#blog',
        display:'Blog'
    }
]
const Footer = () => {
    const year=new Date().getFullYear();
  return <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>Meditation App</h2>
                <p className="description">Improve your focus</p>
                <p className="small__text description">Use our Meditation app and start your journey to a calmer, more mindful life. Embrace the present moment and discover the power of meditation.</p>
            </div>
            <div className="footer__quick-links">
                <h3 className="quick__links-title">Solutions</h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className="quick__link-item" key={index}>
                            <a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">Company</h3>
                <ul className="quick__links">
                    {
                        quickLinks02.map((item,index)=>(
                            <li className="quick__link-item" key={index}>
                            <a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">Solutions</h3>
                <ul className="quick__links">
                    {
                        quickLinks03.map((item,index)=>(
                            <li className="quick__link-item" key={index}>
                            <a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <p className="copyright">Copyright {year}. All rights reserved.{" "}</p>
    </div>
  </footer>
}

export default Footer