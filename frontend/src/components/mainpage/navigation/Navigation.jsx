import React, { useState, useEffect } from 'react'
import logo from '../../../images/trustpay-logo.png'
import './Navigation.css'
import { useNavigate } from "react-router-dom";
import profileBlackBgLogo from '../../../images/profile-logo.svg'
import profileBlueBgLogo from '../../../images/profile-logo-blue-bg.svg'


function Navigation() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleHoverEnter = () => {
        document.getElementById("userIcon").src = profileBlueBgLogo
    }

    const handleHoverLeave = () => {
        document.getElementById("userIcon").src = profileBlackBgLogo
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            // Check if click was outside of the menu and the hamburger button
            const navItems = document.querySelector('.nav-items');
            const hamburger = document.querySelector('.hamburger-nav');
            
            if (isMenuOpen && 
                navItems && 
                !navItems.contains(e.target) && 
                hamburger && 
                !hamburger.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener when menu is open
        if (isMenuOpen) {
            document.addEventListener('click', closeMenu);
        }

        // Clean up event listener
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [isMenuOpen]);

    return (
        <div className='navigation'>

            {/* hamburger Menu */}
            <button className="hamburger-nav" onClick={toggleMenu}>
                &#9776;
            </button>

            <a href="#" className="logo"><img src={logo} alt="image of TrustPay logo" /></a>

            <div className={`nav-items ${isMenuOpen ? 'show' : ''}`}>
                <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>TrustPay for Consumer</a>
                <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>TrustPay for Business</a>
                <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>Investor Relations</a>
                <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>Company</a>
                <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>Career</a>
            </div>

            <button onClick={() => {
                navigate('/signin');
            }} className='sign-in' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>Sign In <img id="userIcon" src={profileBlackBgLogo} alt="User icon" /></button>
        </div>
    )
}

export default Navigation