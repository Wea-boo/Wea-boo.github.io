import React from 'react';
import HeroBanner from './HeroBanner';
import Description from './Description';
import Categories from './Categories';
import Goals from './Goals';
import Sponsors from './Sponsors';
import Contact from './Contact';

export default function LandingPage() {
  return (
    <div>
      <HeroBanner />
      <Description />
      <Categories />
      <Goals />
      <Sponsors />
      <Contact />
    </div>
  )
}
