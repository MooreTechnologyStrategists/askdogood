// DMV REAL Meal Preps Promo Banner Component
import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => (
  <div className="promo-banner">
    <img
      src="/promo/dmv-real-meal-preps.png"
      alt="DMV REAL Meal Preps Promo"
      className="promo-banner-image"
    />
    <div className="promo-banner-content">
      <h2>New! DMV REAL Meal Preps</h2>
      <p>
        Lower your blood pressure, boost your energy, and feel like yourself again with our plant-based meal prep, healing juices, and custom health plans.<br/>
        <strong>Serving Landover Hills, Greenbelt, College Park, Bowie, Laurel, MGM/National Harbor & surrounding areas.</strong><br/>
        <span style={{color: '#d32f2f', fontWeight: 'bold'}}>Text 202.420.0682 to get started — Only 10 spots available weekly!</span>
      </p>
    </div>
  </div>
);

export default PromoBanner;
