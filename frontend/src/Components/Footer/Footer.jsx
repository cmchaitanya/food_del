import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_content_left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit hic quam alias error eveniet? Id eius dolores eligendi dolorum deserunt laboriosam, omnis sit beatae asperiores minus eos, sed expedita.</p>
            <div className="footer_social_icon">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer_content_center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
        </div>
        <div className="footer_content_right">
            <h2>Get In Touch</h2>
            <ul>
              <li>+91-232-345-3456</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">
        Copyright 2024 @ Tomato.com - AllRight Reserved.
      </p>
    </div>
  )
}

export default Footer
