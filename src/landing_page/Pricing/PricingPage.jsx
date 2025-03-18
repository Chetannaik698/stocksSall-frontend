import React from 'react'
import PricingHero from './PricingHero';
import './Pricing.css'
import PriceInfo from './PriceInfo';
import PriceTab from './PriceTab';

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PriceInfo />
      <PriceTab />
    </div>
  )
}

export default PricingPage;