import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/Assets/logo_big.png'
import insta from '../Assests/Assets/instagram_icon.png'
import pintrest from '../Assests/Assets/pintester_icon.png'
import whatsapp from '../Assests/Assets/whatsapp_icon.png' 
const Footer = () =>{
    return(
        <div className='footer'>
            <div className="footerlogo">
                {/* <img src={footer_logo} alt="" /> */}
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Address abc road, XYZ city</li>
                <li>E-mail id@email.com</li>
                <li>Phone number- 7786446XXX</li>
            </ul>
            <div className="footer-icon">
                <img src={insta} alt="" />
                <img src={pintrest} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <div className="footer-copywrite">
                <hr/>
                <p>Copyright @2024 - All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer