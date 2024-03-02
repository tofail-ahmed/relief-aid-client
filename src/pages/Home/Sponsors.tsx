import {
  FaAmazon,
  FaFacebookF,
  FaGoogle,
  FaInstagramSquare,
  FaMicrosoft,
  FaPaypal,
  FaSpotify,
  FaWhatsapp,
} from "react-icons/fa";
import SectionHeader from "../../utils/SectionHeader";
import { SiAdobe, SiAsana } from "react-icons/si";

const Sponsors = () => {
  return (
    <div>
      <div>
        <SectionHeader
          className="text-center py-5 "
          text="Our Valuable Sponsors"
        />
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 space-y-4">
        <span className="text-6xl text-orange-500 mx-auto">
          <FaAmazon />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaPaypal />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaMicrosoft />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaGoogle />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaFacebookF />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaInstagramSquare />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaWhatsapp />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <FaSpotify />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <SiAsana />
        </span>
        <span className="text-6xl text-orange-500 mx-auto">
          <SiAdobe />
        </span>
      </div>
    </div>
  );
};

export default Sponsors;
