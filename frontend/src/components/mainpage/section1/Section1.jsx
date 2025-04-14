import React from 'react'
import './Section1.css'
import logo from '../../../images/trustpay-logo2.png'
import logo2 from '../../../images/section1-image.jpg'
import { useNavigate } from 'react-router-dom'

function Section1() {
    const navigate = useNavigate();

    return (
        <section className='section1-wrapper'>
            <div className="message-container">
                <div className="scrolling-message">
                    <p><span className='text-bold'>No Wallet KYC Required</span> <span className='emoji' role="img" aria-label="smiling face">😊</span> to pay using UPI on TrustPay. <a href="#" className="text-bold">Learn more.</a></p>
                </div>
            </div>

            <div className="section1-container">
                <div className="section1-message">
                    <img src={logo} alt="TrustPay Logo" className="logo" />
                    <h1>India's Most-loved Payments App</h1>
                    <p>Recharge & pay bills, book flights & movie tickets,
                        open a savings account, invest in stocks & mutual
                        funds, and do a lot more.</p>
                    <div className="button-container">
                        <button 
                            onClick={() => navigate('/signup')} 
                            type="button" 
                            className="primary-button">
                            Sign Up
                        </button>
                        <button 
                            onClick={() => navigate('/signin')} 
                            type="button" 
                            className="secondary-button">
                            Sign In
                        </button>
                    </div>
                </div>

                <div className='section1-image'>
                    <img src={logo2} alt="TrustPay App Preview" />
                </div>
            </div>
        </section>
    )
}

export default Section1