
import "./GalleryCard.css";
import { Link } from "react-router-dom";


export interface IImg {
  img?: string;
}
export interface IGalleryCardProps {
  img: IImg;
  className?: string;
}
const GalleryCard = ({ img, className }: IGalleryCardProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth' // Optional smooth scrolling
    });
  };
  return (
    <div className="bg-gray-700 rounded-md">
      <div className={`parent ${className} opacity-60`}>
        <button className="son lg:h-[300px] lg:w-[250px] w-[200px] h-[250px] rounded-ss-lg rounded-ee-lg">
          <img
            className="img lg:h-[400px] lg:w-[300px] w-[200px] h-[250px]"
            src={img.img}
            alt=""
          />
          <Link
            onClick={scrollToTop}
            to="/relief-goods"
            className="son-text flex items-center gap-1 font-bold"
          >
            {/* <Donation/> */}
            Donate now
           
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
