import React from "react";
import "./GalleryCard.css";
import { Link } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi";

const GalleryCard = ({ img }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth' // Optional smooth scrolling
    });
  };
  return (
    <div>
      <div className="main">
        <button className="btn">
          <img className="img" src={img} alt="" />
          <Link
            onClick={scrollToTop}
            to="/relief-goods"
            className="button-text flex items-center gap-1 "
          >
            Donate Now
            <BiDonateHeart />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
