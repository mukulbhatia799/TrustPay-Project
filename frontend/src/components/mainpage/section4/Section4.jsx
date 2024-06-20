import React from 'react'
import './Section4.css'
import Megacard from './Megacard'
import Minicard from './Minicard'
import trustpayWalletImg from '../../../images/trustpay-wallet.png'
import UpiMoneyTransferImg from '../../../images/upi-money-transfer.png'
import sbiCardImg from '../../../images/sbi-bank-select-card.webp'
import hdfcCardImg from '../../../images/hdfc-bank-select-card.webp'
import trustpayMainLogo from '../../../images/main-logo.png'
import payNowImg from '../../../images/pay-now.jpg'
import payAndEnjoyImg from '../../../images/pay-and-enjoy.jpg'
import paymentSuccessfulImg from '../../../images/paid-successfully-250.webp'
import payWhileShoppingImg from '../../../images/pay-while-shopping.avif'

function Section4() {
  return (
    <section className='section4-wrapper'>

      <h1>TrustPay Payment Instruments</h1>

      <div className='section4-container'>

        <Megacard
          iconURL={trustpayWalletImg}
          iconLabel={"TrustPay Wallet"}
          heading={"The Fastest Way to Pay In-store & Online."}
          para={"Load up your TrustPay Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps."}
          sideImageURL={payAndEnjoyImg} />

        <Megacard
          iconURL={UpiMoneyTransferImg}
          iconLabel={"UPI Money Transfer"}
          heading={"Pay anyone directly from your bank account."}
          para={"Pay anyone, everywhere. Make contactless & secure payments in-stores or online using TrustPay Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."}
          sideImageURL={paymentSuccessfulImg} />

        <Megacard
          iconURL={payNowImg}
          iconLabel={""}
          heading={"Want it? No more waiting for it."}
          para={"With TrustPay Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month."}
          sideImageURL={payWhileShoppingImg}
          learn={true}
          largeicon={true} />

        <div className="mini-card-row">
          <Minicard
            bankIconURL={trustpayMainLogo}
            heading={"Unlimited Cashback Every time"}
            para={"TrustPay HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers."}
            bankCardURL={hdfcCardImg} />

          <Minicard
            bankIconURL={trustpayMainLogo}
            heading={"India’s Most Sincere Credit Card"}
            para={"TrustPay SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire."}
            bankCardURL={sbiCardImg}
          />
        </div>

      </div>
    </section>
  )
}

export default Section4
