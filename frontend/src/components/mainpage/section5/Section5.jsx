import './Section5.css'
import Megabox from './Megabox'
import logo from '../../../images/main-logo.png'
import stocksAndFundslogoImg from '../../../images/stocks-and-funds.png'
import sideImg from '../../../images/sincere-bank.jpg'
import savingImg from '../../../images/long-term-saving.jpg'
import insuranceIconImg from '../../../images/trustpay-insurance.png'
import insuranceSideImg from '../../../images/insurance.jpg'
import personalLoanSideImg from '../../../images/personal-loan.jpg'
import personalLoanImg from '../../../images/personal-loan.png'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../../Carousel.css'
import { useEffect, useState } from 'react';

const CustomCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slides = [
        <Megabox
            iconURL={logo}
            heading={"India's most sincere bank."}
            para={"TrustPay Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."}
            sideImageURL={sideImg} />,
        <Megabox
            iconURL={stocksAndFundslogoImg}
            heading={"Build Long-term Wealth & Achieve your Goals."}
            para={"Investing on TrustPay Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."}
            sideImageURL={savingImg}
            right={true} />,
        <Megabox
            iconURL={insuranceIconImg}
            heading={"Insurance made easy."}
            para={"Buying insurance does not have to be tedious, time-consuming & confusing. TrustPay Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."}
            sideImageURL={insuranceSideImg} />,
        <Megabox
            iconURL={personalLoanImg}
            heading={"Get a Personal Loan in 2 Minutes."}
            para={"TrustPay offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."}
            sideImageURL={personalLoanSideImg}
            right={true} />,
    ];

    return (
        <div className="bg-gradient-to-b from-blue-400 to-blue-500 py-16">
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center md:text-left">
                    Financial Services by TrustPay
                </h1>
                
                <div className="flex justify-center items-center">
                    <div className="w-full md:w-11/12 lg:w-5/6 rounded-xl overflow-hidden bg-white shadow-2xl">
                        <Carousel 
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3000}
                            stopOnHover={false}
                            showStatus={true}
                            showArrows={false}
                            showIndicators={false}
                            swipeable={true}
                            emulateTouch={false}
                            selectedItem={0}
                            className="carousel-container"
                            useKeyboardArrows={false}
                            preventMovementUntilSwipeScrollTolerance={true}
                            swipeScrollTolerance={50}
                        >
                            {slides.map((slide, index) => (
                                <div className="px-4 md:px-8 lg:px-12 py-8" key={index}>
                                    {slide}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;