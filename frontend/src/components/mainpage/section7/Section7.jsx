import React from 'react'
import './Section7.css'
import Longcard from './Longcard'

function Section7() {
  return (
    <section className='section7-wrapper'>
        
        <h1>Business Tools to help your business grow</h1>

        <div className="section7-container">

            <Longcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png"}
            heading={"POS Billing Software"}
            para={"Say Hello to Smart Retail Business Management"}/>

            <Longcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png"}
            heading={"TrustPay for Business App"}
            para={"Everything you need to manage your business on your phone"}/>

            <Longcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/854036/1656568216166.png"}
            heading={"Advertise on TrustPay"}
            para={"Grow your business by advertising on India’s largest mobile business"}/>

            <Longcard 
            imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png"}
            heading={"Business Khata"}
            para={"Managing Khata made easy"}/>

        </div>
      
    </section>
  )
}

export default Section7
