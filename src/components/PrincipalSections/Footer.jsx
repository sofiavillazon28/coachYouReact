import React from 'react'

import logo from "../../assets/images/logo/logo.svg" 
import facebbook_outlined from "../../assets/images/icons/facebbook_outlined.svg" 
import instagram_outlined from "../../assets/images/icons/instagram_outlined.svg" 
import iconbase from "../../assets/images/icons/iconbase.svg" 
import iconbase2 from "../../assets/images/icons/iconbase-1.svg"
import Message from "../../assets/images/icons/Message.svg" 
import map_marker from "../../assets/images/icons/map_marker.svg" 
import arrow from "../../assets/images/icons/arrow2.svg" 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer__logo container f-elements">
        <img src={logo} alt=""/>
      </div>
      <div className="footer__contact-info container f-elements">
        <div className="footer__contact-left">
          <p className="p3 text-grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            <br/> © helps you build apps faster and better.</p>
          <ul className="footer__contact-list">
            <li><img src={facebbook_outlined} alt=""/></li>
            <li><img src={instagram_outlined} alt=""/></li>
            <li><img src={iconbase} alt=""/></li>
            <li><img src={iconbase2} alt=""/></li>
          </ul>
        </div>
        <div className="footer__contact-addres">
          <div className="f-elements">
            <img src={Message} alt=""/>
              <p className="p3 text-primary"> info@coachyou.com</p>
          </div>
          <div className="f-elements">
            <img src={map_marker} alt=""/>
              <p className="p3 text-primary"> 655 Schaefer Dale</p>
          </div>
        </div>
        <div className="footer__contact-input f-elements gap-xs">
          <input className="textfield textfield-simple" type="text" name="" placeholder="Ingresa tu correo" id=""/>
          <button className="button square-button-small">
          <img src={arrow} alt="icon arrow right"/>
          </button>
        </div>
      </div>
      <div className="footer__contact-rights container f-elements align-center space-between">
        <div>
          <p className="p2 text-grey">© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="">
          <ul className="footer__contact-links">
            <li><Link to="/"><p className="p3 text-grey">Help Center</p></Link></li>
            <li><Link to="/"><p className="p3 text-grey">Terms and conditions</p></Link></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;