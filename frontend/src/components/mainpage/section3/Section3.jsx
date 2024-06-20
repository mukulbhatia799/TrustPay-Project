import React from 'react'
import './Section3.css'
import Card from '../card/Card'
import movieImg from '../../../images/movie-ticket.png'
import flightImg from '../../../images/flight-ticket.png'
import busImg from '../../../images/bus-ticket.png'
import trainImg from '../../../images/train-ticket.png'
import insuranceImg from '../../../images/buy-insurance.png'
import interFlightsImg from '../../../images/international-flights.png'
import stocksImg from '../../../images/invest-in-stocks.webp'

function Section3() {
  return (
    <section className='section3-wrapper'>
      <div className='section3-container'>

        <h1>Book & Buy on TrustPay.</h1>

        <div class="flex overflow-hidden space-x-16 group">
          <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
            <Card bgcolor={"dark"} imgURL={movieImg}
              cardMessage={["Movie", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={flightImg}
              cardMessage={["Flight", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={busImg}
              cardMessage={["Bus", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={trainImg}
              cardMessage={["Train", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={insuranceImg}
              cardMessage={["Buy", "Insurance"]} />

            <Card bgcolor={"dark"} imgURL={interFlightsImg}
              cardMessage={["International", "Flights"]} />

            <Card bgcolor={"dark"} imgURL={insuranceImg}
              cardMessage={["Invest", "In Stocks"]} />
          </div>
          <div class="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <Card bgcolor={"dark"} imgURL={movieImg}
              cardMessage={["Movie", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={flightImg}
              cardMessage={["Flight", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={busImg}
              cardMessage={["Bus", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={trainImg}
              cardMessage={["Train", "Tickets"]} />

            <Card bgcolor={"dark"} imgURL={insuranceImg}
              cardMessage={["Buy", "Insurance"]} />

            <Card bgcolor={"dark"} imgURL={interFlightsImg}
              cardMessage={["International", "Flights"]} />

            <Card bgcolor={"dark"} imgURL={insuranceImg}
              cardMessage={["Invest", "In Stocks"]} />
          </div>
        </div>

        <div className='card-wrapper'>
          <Card bgcolor={"dark"} imgURL={movieImg}
            cardMessage={["Movie", "Tickets"]} />

          <Card bgcolor={"dark"} imgURL={flightImg}
            cardMessage={["Flight", "Tickets"]} />

          <Card bgcolor={"dark"} imgURL={busImg}
            cardMessage={["Bus", "Tickets"]} />

          <Card bgcolor={"dark"} imgURL={trainImg}
            cardMessage={["Train", "Tickets"]} />

          <Card bgcolor={"dark"} imgURL={insuranceImg}
            cardMessage={["Buy", "Insurance"]} />

          <Card bgcolor={"dark"} imgURL={interFlightsImg}
            cardMessage={["International", "Flights"]} />

          <Card bgcolor={"dark"} imgURL={insuranceImg}
            cardMessage={["Invest", "In Stocks"]} />
        </div>

      </div>
    </section>
  )
}

export default Section3
