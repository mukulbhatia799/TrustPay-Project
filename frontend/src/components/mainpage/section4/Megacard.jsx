import React from 'react'
import './Megacard.css'
import '../learn_more/LearnButton'
import LearnButton from '../learn_more/LearnButton'

function Megacard({iconURL, iconLabel, sideImageURL, heading, para, learn, largeicon}) {
  return (
    <div className="card-container">

        <div className="card-msg">
            <div className="card-icon">
                <img src={iconURL} alt="webpage image"  data-largeicon={largeicon}/>
                <p>{iconLabel}</p>
            </div>

            <div className="card-text">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>

            {learn ? <LearnButton /> : <button className="download-app">Download the App
                    <a href="https://itunes.apple.com/in/app/mobile-recharge-bill-payments/id473941634?mt=8" target="_blank" rel="noopener noreferrer"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z" fill="white"></path></svg></a>
                    <a href="https://play.google.com/store/apps/details?id=net.one97.paytm" target="_blank" rel="noopener noreferrer"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z" fill="white"></path></svg></a>
            </button>}
        </div>

        <div className="card-picture">
            <img src={sideImageURL} alt="webpage image" />
        </div>
      
    </div>
  )
}

export default Megacard
