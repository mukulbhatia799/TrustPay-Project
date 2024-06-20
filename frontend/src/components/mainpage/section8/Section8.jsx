import React from 'react'
import './Section8.css'
import Rowhead from './Rowhead'
import Investcard from './Investcard'
import Offercard from './Offercard'
import trustpayMoneyLogo from '../../../images/trustpay-money.png'
import trustpayTravelLogo from '../../../images/trustpay-travel.png'
function Section8() {
  return (
    <section className='section8-wrapper'>

        <div className="section8-container">
                   
          <div className="row1">
            <Rowhead
            imgURL={trustpayMoneyLogo}
            para={"Get started on wealth creation journey with Zero brokerage fee & no hidden charges."} />

            <Investcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png"}
            heading={"Invest in Stocks"}/>

            <Investcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728895/1618575899205.png"}
            heading={"Apply for IPO"}/>

            <Investcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/800760/1618831809222.png"}
            heading={"Invest in ETFs"}/>

            <Investcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728896/1618575990183.png"}
            heading={"Buy Gold"}/>

            <Investcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728899/1618576408440.png"}
            heading={"Invest in Mutual Funds"}/>
          </div>

          <div className="row2">
            <Rowhead
            imgURL={trustpayTravelLogo}
            para={"Best travel solutions with quick ticket bookings, great offers and easy refunds"} />
            
            <Offercard
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/863734/1627552693557.png"}
            heading={"Flat 14% Cashback With Code WELCOMEFLIGHT"} />

            <Offercard
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/864144/1627566096011.png"}
            heading={"100% Refund With Paytm's Cancellation Protect"} />

            <Offercard
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/864145/1627566172335.png"}
            heading={"Flat 10% Cashback With Code HAPPYBUS"} />

            <Offercard
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/864151/1627567062180.png"}
            heading={"Sanitised Bus Options With TravelSafe+"} />

            <Offercard
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/864152/1627566492097.png"}
            heading={"Hassle Free Train Ticket Bookings"} />

            <Offercard
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/864153/1627566396231.png"}
            heading={"PNR Status Check In Few Simple Clicks"} />
          </div>

        </div>
      
    </section>
  )
}

export default Section8
