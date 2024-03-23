import img1 from "../../assets/weDeliver/Birth+certificates+being+issued+post+cyclone.jpg";
import img2 from "../../assets/weDeliver/Lady+with+chicken+livelihood+header.jpg";
import img3 from "../../assets/weDeliver/Ranotsara+Primary+school+education.jpg";
import img4 from "../../assets/weDeliver/_Infant+having+arm+measured+by+nurse.jpg";
import img5 from "../../assets/weDeliver/clean+water+pic.jpg";
import img6 from "../../assets/weDeliver/conservation-img.jpg";
import Container from "../../components/ui/Containert";
import DeliverCard from "../../utils/DeliverCard";
import SectionHeader from "../../utils/SectionHeader";

const Deliver = () => {
  return (
    <div className=" ">
      <Container className="deliverBg py-10">
        <SectionHeader className="text-center my-8" text="WHAT WE DELIVER ?" />
        <div className=" grid lg:grid-cols-3 gap-4 ">
          <DeliverCard
          className="lg:rounded-tl-full rounded-none"
            img={img2}
            text="LIVELIHOOD"
            subText="EMPOWERING COMMUNITIES, FOSTERING RESILIENCE"
          />
          <DeliverCard
            img={img3}
            text="EDUCATION"
            subText="EMPOWERING MINDS, SHAPING FUTURES"
          />
          <DeliverCard
          className="lg:rounded-tr-full rounded-none"
            img={img4}
            text="HEALTH"
            subText=" HEALING LIVES, ONE STEP AT A TIME"
          />
          <DeliverCard
          className="lg:rounded-bl-full rounded-none"
            img={img5}
            text="CLEAN WATER"
            subText=" QUENCHING THIRST, REVITALIZING COMMUNITIES"
          />
          <DeliverCard
            img={img6}
            text="COSERVATION"
            subText="PROTECTING NATURE, PRESERVING HARMONY"
          />
          <DeliverCard
          className="lg:rounded-br-full rounded-none"
            img={img1}
            text="HUMAN RIGHTS"
            subText=" ADVOCATING EQUALITY, DEFENDING DIGNITY"
          />
        </div>
      </Container>
    </div>
  );
};

export default Deliver;
