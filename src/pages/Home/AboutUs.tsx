import React from 'react'
import Container from '../../components/ui/Containert'
import HowItWorks from './HowItWorks'
import Sponsors from "./Sponsors";
import img from "../../assets/about_img.jpg";
import SectionHeader from "../../utils/SectionHeader";
import Donation from '../../utils/Donation';
const AboutUs = () => {
  return (
    <div className="py-10 aboutBg">
      <Container>
        <div>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <SectionHeader text="WHAT WE DO?" />
            <Donation/>
          </div>
        </div>
        <HowItWorks />
        <Sponsors />
      </Container>
    </div>
  );
};

export default AboutUs