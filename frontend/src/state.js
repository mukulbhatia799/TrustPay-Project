import movieImg from './images/movie-ticket.png'
import flightImg from './images/flight-ticket.png'
import busImg from './images/bus-ticket.png'
import trainImg from './images/train-ticket.png'
import insuranceImg from './images/buy-insurance.png'
import interFlightsImg from './images/international-flights.png'

import prepaidRechargeImg from './images/recharge-prepaid-mobile.png'
import electricityBillImg from './images/electricity-bill.png'
import dthRechargeImg from './images/dth-recharge.png'
import broadbandImg from './images/broadband.png'
import educationFeeImg from './images/education-fee.png'
import PaymentServcesImg from './images/payment-services.png'
import gasCylinerImg from './images/gas-cylinder.png'

import trustpayWalletImg from './images/trustpay-wallet.png'
import UpiMoneyTransferImg from './images/upi-money-transfer.png'
// import sbiCardImg from './images/sbi-bank-select-card.webp'
// import hdfcCardImg from './images/hdfc-bank-select-card.webp'
// import trustpayMainLogo from './images/main-logo.png'
import payNowImg from './images/pay-now.jpg'
import payAndEnjoyImg from './images/pay-and-enjoy.jpg'
import paymentSuccessfulImg from './images/paid-successfully-250.webp'
import payWhileShoppingImg from './images/pay-while-shopping.avif'

import posBillingImg from './images/pos-billing-software.webp'
import advertiseBusinessImg from './images/advertise-business.avif'
import khataBookImg from './images/khata-book.jpg'
import businessAppImg from './images/business-app.jpg'


const servicesState = [
    {
        imgURL: prepaidRechargeImg,
        cardMessage: ["Recharge", "Prepaid", "Mobile"]
    },
    {
        imgURL: electricityBillImg,
        cardMessage: ["Pay", "Electricity", "Bill"]
    },
    {
        imgURL: dthRechargeImg,
        cardMessage: ["Recharge", "DTH", "Connection"]
    },
    {
        imgURL: gasCylinerImg,
        cardMessage: ["Book", "Gas", "Cylinder"]
    },
    {
        imgURL: broadbandImg,
        cardMessage: ["Pay", "Broadband &", "Landline Bill"]
    },
    {
        imgURL: educationFeeImg,
        cardMessage: ["Pay", "Education", "Fee"]
    },
    {
        imgURL: PaymentServcesImg,
        cardMessage: ["All", "Payment", "Services"]
    },
];


const bookBuyState = [
    {
        bgcolor: "dark",
        imgURL: movieImg,
        cardMessage: ["Movie", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: flightImg,
        cardMessage: ["Movie", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: movieImg,
        cardMessage: ["Flight", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: busImg,
        cardMessage: ["Bus", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: trainImg,
        cardMessage: ["Train", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: interFlightsImg,
        cardMessage: ["International", "Flights"]
    },
    {
        bgcolor: "dark",
        imgURL: insuranceImg,
        cardMessage: ["Invest", "In Stocks"]
    },
];


const megacard = [
    {
        iconURL: trustpayWalletImg,
        iconLabel: "TrustPay Wallet",
        heading: "The Fastest Way to Pay In-store & Online.",
        para: "Load up your TrustPay Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps.",
        sideImageURL: payAndEnjoyImg
    },
    {
        iconURL: UpiMoneyTransferImg,
        iconLabel: "UPI Money Transfer",
        heading: "Pay anyone directly from your bank account.",
        para: "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using TrustPay Wallet or Directly from your Bank Account. Plus, send & receive money from anyone.",
        sideImageURL: paymentSuccessfulImg,
    },
    {
        iconURL: payNowImg,
        iconLabel: "",
        heading: "Want it? No more waiting for it.",
        para: "With TrustPay Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month.",
        sideImageURL: payWhileShoppingImg,
    },
];



const longCard = [
    {
        imgURL: posBillingImg,
        heading: "POS Billing Software",
        para: "Say Hello to Smart Retail Business Management"
    },
    {
        imgURL: businessAppImg,
        heading: "TrustPay for Business App",
        para: "Everything you need to manage your business on your phone"
    },
    {
        imgURL: advertiseBusinessImg,
        heading: "Advertise on TrustPay",
        para: "Grow your business by advertising on India’s largest mobile business"
    },
    {
        imgURL: khataBookImg,
        heading: "Business Khata",
        para: "Managing Khata made easy"
    },
];

const investcard = [
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png",
        heading: "Invest in Stocks"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/728895/1618575899205.png",
        heading: "Apply for IPO"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/800760/1618831809222.png",
        heading: "Invest in ETFs"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/728896/1618575990183.png",
        heading: "Buy Gold"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/728899/1618576408440.png",
        heading: "Invest in Mutual Funds"
    },
];

const offercard = [
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/863734/1627552693557.png",
        heading: "Flat 14% Cashback With Code WELCOMEFLIGHT"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/864144/1627566096011.png",
        heading: "100% Refund With Paytm's Cancellation Protect"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/864145/1627566172335.png",
        heading: "Flat 10% Cashback With Code HAPPYBUS"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/864151/1627567062180.png",
        heading: "Sanitised Bus Options With TravelSafe+"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/864152/1627566492097.png",
        heading: "Hassle Free Train Ticket Bookings"
    },
    {
        imgURL: "https://assetscdn1.paytm.com/images/catalog/view_item/864153/1627566396231.png",
        heading: "PNR Status Check In Few Simple Clicks"
    },
];

export const data = { servicesState, bookBuyState, megacard, longCard, investcard, offercard }