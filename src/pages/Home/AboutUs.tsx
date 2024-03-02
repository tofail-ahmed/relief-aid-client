
import Container from '../../components/ui/Containert'
import HowItWorks from './HowItWorks'
import Sponsors from "./Sponsors";
import img from "../../assets/about_img.jpg";
import SectionHeader from "../../utils/SectionHeader";
import Donation from '../../utils/Donation';
import BecomeADonor from '../../components/ui/BecomeADonor';
import { IoCloudDone } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="py-10 aboutBg">
      <Container>
        <SectionHeader className="text-center py-10" text="WHAT WE DO?" />
        <div className="flex lg:flex-row flex-col-reverse justify-around items-center">
          <div className="lg:w-[500px] w-[300px]">
            <img src={img} alt="" />
          </div>
          <div className="lg:w-[500px] w-[300px] space-y-2">
            <h2 className="text-2xl font-semibold text-orange-500">
              Rise Your Hand to Help The Needy Poor
            </h2>
            <p className="text-xl text-slate-500">
              Our donation website empowers communities and fosters social
              change by connecting donors with impactful projects. We aim to
              increase accessibility to donations, raise awareness about social
              issues, and ensure transparency in the donation process. By
              facilitating engagement between donors and organizations, we've
              built support networks and achieved tangible results, such as
              improved access to education and healthcare. Our mission is to
              make a meaningful difference in the lives of those we serve,
              guided by our commitment to empowerment, social change, and
              support for those in need.
            </p>
            <div className=" grid grid-cols-2 my-2">
              <div className="flex items-center gap-2 text-xl font-bold">
                <span className="text-orange-500 font-bold">
                  <IoCloudDone />
                </span>
                <span className="text-black">Charity For Foods</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <span className="text-orange-500 font-bold">
                  <IoCloudDone />
                </span>
                <span className="text-black">Charity For Water</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <span className="text-orange-500 font-bold">
                  <IoCloudDone />
                </span>
                <span className="text-black">Charity For Education</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <span className="text-orange-500 font-bold">
                  <IoCloudDone />
                </span>
                <span className="text-black">Charity For Medical</span>
              </div>
            </div>
            <div>
              <Donation />
              <div></div>
            </div>
          </div>
        </div>
        <HowItWorks />
        <BecomeADonor />
        <Sponsors />
      </Container>
    </div>
  );
};

export default AboutUs