import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer-desc'>
                <h2 className = 'c-name'>Team Tweaks</h2>
                <p className = 'footer-p'>We know how important customer experience is for a business, and therefore, we strive.</p>
            </div>
            <div className = 'footer-links'>
                <h4 className = 'heading-links'>COMPANY</h4>
                <Link to='/' className = 'links'>Products</Link>
                <Link to='/' className = 'links'>Resources</Link>
                <Link to='/' className = 'links'>Blog</Link>
                <Link to='/' className = 'links'>Stories</Link>
            </div>

            <div className = 'footer-links'>
                <h4 className = 'heading-links'>SUPPORT</h4>
                <Link to='/' className = 'links'>FAQ</Link>
                <Link to='/' className = 'links'>How it works</Link>
                <Link to='/' className = 'links'>Features</Link>
                <Link to='/' className = 'links'>Contact</Link>
            </div>
            
            <div className = 'footer-links'>
                <h4 className = 'heading-links'>CONTACT</h4>
                <Link to='/' className = 'links'>123 456 7789 10</Link>
                <Link to='/' className = 'links'>info@crowmart.com</Link>
                <Link to='/' className = 'links'>007 popie, New City. USA</Link>
                <Link to='/' className = 'links'>WI - 221 47 86</Link>
            </div>
        </div>
    )
}

export default Footer
