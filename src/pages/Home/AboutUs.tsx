import React from 'react'
import Container from '../../components/ui/Containert'
import HowItWorks from './HowItWorks'
import Sponsors from "./Sponsors";

const AboutUs = () => {
  return (
    <div className="py-10 aboutBg">
      <Container>
        <HowItWorks />
        <Sponsors />
      </Container>
    </div>
  );
};

export default AboutUs