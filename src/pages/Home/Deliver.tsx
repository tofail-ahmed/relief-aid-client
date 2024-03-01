import React from "react";
import img1 from "../../assets/weDeliver/Birth+certificates+being+issued+post+cyclone.jpg";
import img2 from "../../assets/weDeliver/Lady+with+chicken+livelihood+header.jpg";
import img3 from "../../assets/weDeliver/Ranotsara+Primary+school+education.jpg";
import img4 from "../../assets/weDeliver/_Infant+having+arm+measured+by+nurse.jpg";
import img5 from "../../assets/weDeliver/clean+water+pic.jpg";
import img6 from "../../assets/weDeliver/conservation-img.jpg";
import Container from "../../components/ui/Containert";
import DeliverCard from "../../utils/DeliverCard";
const Deliver = () => {
  return (
    <div className="deliverBg py-10">
      <Container>
      <div className="grid lg:grid-cols-3 gap-4 ">
      
        <DeliverCard img={img2} text="LIVELIHOOD"/>
        <DeliverCard img={img3} text="EDUCATION"/>
        <DeliverCard img={img4} text="HEALTH"/>
        <DeliverCard img={img5} text="CLEAN WATER"/>
        <DeliverCard img={img6} text="COSERVATION"/>
        <DeliverCard img={img1} text="HUMAN RIGHTS"/>
      </div>
    </Container>
    </div>
  );
};

export default Deliver;
