import React from 'react'
import './footer.css'
import logo from '../../assets/NESSDROID LOGO WORD.png'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
   
  return (
    <main className='footer'>
        <div className='footer-links'>
          <div className='footer-links-logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='footer-links-divider'>
            <div className='footer-links-header'>
              <h2>CONTACT ME</h2>
            </div>
            <div className='footer-links-contact'>
              <ul>
                <li>
                  <a href="mailto:ononogbugoodness@gmail.com" target='_blank' rel='noopener noreferrer'><BiLogoGmail />EMAIL</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/goodness-ononogbu-aicmc/" target='_blank' rel='noopener noreferrer'><IoLogoLinkedin />LINKEDIN</a>
                </li>
                <li>
                  <a href="https://github.com/GoodnessOno" target='_blank' rel='noopener noreferrer'><IoLogoGithub />GITHUB</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-date">
          <p><b>&copy; {currentYear} GOODNESS ONONOGBU. All rights reserved.</b></p>
        </div>
    </main>
  )
}

export default Footer
