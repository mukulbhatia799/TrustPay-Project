import React from 'react'
import './Section2.css'
import Card from '../card/Card'
import prepaidRechargeImg from '../../../images/recharge-prepaid-mobile.png'
import electricityBillImg from '../../../images/electricity-bill.png'
import dthRechargeImg from '../../../images/dth-recharge.png'
import broadbandImg from '../../../images/broadband.png'
import educationFeeImg from '../../../images/education-fee.png'
import PaymentServcesImg from '../../../images/payment-services.png'
import gasCylinerImg from '../../../images/gas-cylinder.png'

function Section2() {
  return (
    <section className='section2-wrapper'>
      <div className='section2-container'>

        <h1>Recharge & Pay Bills on TrustPay.</h1>
        <div class="flex overflow-hidden space-x-16 group">
          <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
            <Card imgURL={prepaidRechargeImg}
              cardMessage={["Recharge", "Prepaid", "Mobile"]} />

            <Card imgURL={electricityBillImg}
              cardMessage={["Pay", "Electricity", "Bill"]} />

            <Card imgURL={dthRechargeImg}
              cardMessage={["Recharge", "DTH", "Connection"]} />

            <Card imgURL={gasCylinerImg}
              cardMessage={["Book", "Gas", "Cylinder"]} />

            <Card imgURL={broadbandImg}
              cardMessage={["Pay", "Broadband &", "Landline Bill"]} />

            <Card imgURL={educationFeeImg}
              cardMessage={["Pay", "Education", "Fee"]} />

            <Card imgURL={PaymentServcesImg}
              cardMessage={["All", "Payment", "Services"]} />
          </div>
          <div class="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <Card imgURL={prepaidRechargeImg}
              cardMessage={["Recharge", "Prepaid", "Mobile"]} />

            <Card imgURL={electricityBillImg}
              cardMessage={["Pay", "Electricity", "Bill"]} />

            <Card imgURL={dthRechargeImg}
              cardMessage={["Recharge", "DTH", "Connection"]} />

            <Card imgURL={gasCylinerImg}
              cardMessage={["Book", "Gas", "Cylinder"]} />

            <Card imgURL={broadbandImg}
              cardMessage={["Pay", "Broadband &", "Landline Bill"]} />

            <Card imgURL={educationFeeImg}
              cardMessage={["Pay", "Education", "Fee"]} />

            <Card imgURL={PaymentServcesImg}
              cardMessage={["All", "Payment", "Services"]} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section2