
import React from 'react';
import Hero from './Hero';
import LogoStrip from './LogoStrip';
import SolutionsGrid from './SolutionsGrid';
import Calculators from './Calculators';
import Features from './Features';
import Testimonials from './Testimonials';
import ContentSection from './ContentSection';
import { PageType } from '../App';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <LogoStrip />
      <SolutionsGrid />
      <Calculators />
      <Features />
      <Testimonials />
      <ContentSection />
    </>
  );
};

export default Home;
