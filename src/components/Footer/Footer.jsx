import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>Kameumeut.</p>
          <h4>Kameumeut Web Store</h4>
            {/* <img src={assets.logo} alt="" /> */}
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a debitis cupiditate mollitia sint eos id deserunt. Ipsum nihil repudiandae exercitationem, sit incidunt ipsam doloremque id alias temporibus magnam facilis.</p> */}
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Beranda</li>
                <li>Tentang Kami</li>
                <li>Delivery</li>
                <li>Privasy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+62-882-0029-91380</li>
                <li>kameumeut@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright with love</p>
    </div>
  );
}

export default Footer