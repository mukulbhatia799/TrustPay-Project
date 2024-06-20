import React from 'react'
import './Footer.css'
import Accordion from './Accordion'

function Footer() {
  return (
    <footer className='footer'>

      <div className="footer-container">
            
        <div className='media-links'>

          <div className="download-links">
            <h2>Download TrustPay App to Pay from anywhere</h2>
            <a href="#" className="appstore-link">
              <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg" alt="Apple App store image" />
            </a>
            <a href="#" className="googleplay-link">
              <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg" alt="Google Playstore image" />
            </a>
          </div>

          <div className="media-icons">
            <a href="" className="">
              <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/twitter.svg" alt="" />
            </a>

            <a href="" className="">
              <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/instagram.svg" alt="" />
            </a>

            <a href="" className="">
              <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/facebook.svg" alt="" />
            </a>
          </div>

        </div>

        <hr />

        <div className="accordion-container">

          <Accordion
          heading={"Investor Relations"} 
          links={["Home","Financials","Filings & Press Releases", "News & Events", "Corporate Governance", "Resources"]}
          active={true}/>

          <Accordion
          heading={"More About TrustPay"} 
          links={[]}/>

          <Accordion
          heading={"Company"} 
          links={[]}/>

          <Accordion
          heading={"Career"} 
          links={[]}
          nobody={true}/>

          <Accordion
          heading={"Recharge & pay bills"} 
          links={[]}/>

          <Accordion
          heading={"Pay Loan EMI, Insurance Premiums & Education Fee"} 
          links={[]}/>

          <Accordion
          heading={"Book Travel & Entertainment"} 
          links={[]}/>

          <Accordion
          heading={"Investments & Miscellaneous"} 
          links={[]}/>

          <Accordion
          heading={"Loans and Credit Cards"} 
          links={[]}/>

          <Accordion
          heading={"Financial Tools & Calculators"} 
          links={[]}/>

        </div>

      </div>

      <div className="light-blue"></div>
      <div className="dark-blue"></div>
      
    </footer>
  )
}

export default Footer
