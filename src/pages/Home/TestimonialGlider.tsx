import Glider from "react-glider";
import "glider-js/glider.min.css";
import "./Testimonial.css";
import { useTestimonialQuery } from "../../redux/testimonials/TestimonialApi";
import Container from "../../components/ui/Containert";
import { useEffect, useState } from "react";
import SectionHeader from "../../utils/SectionHeader";

interface IQuote {
  img: string;
  name: string;
  designation: string;
  testimonial: string;
}

export default function TestimonialGlider() {
  const { data, isLoading } = useTestimonialQuery("");
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Container className="testimonialBg py-10 ">
      <SectionHeader className=" text-center py-4" text="PRECIOUS NOTES"/>

        <div className="App ">
          <div className="container ">
            <Glider
              hasArrows
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              scrollLock
              hasDots
              className="pb-10 pt-16  "
            >
              {data?.data.map((quote: IQuote, index: number) => (
                <div key={index} className=" text-center text-black bg-orange-500/30">
                  <div className="">
                    <img
                      className="rounded-full size-[100px] mx-auto -mt-10 border-2"
                      src={quote.img}
                      alt=""
                    />
                    <h1 className="font-bold text-xl">{quote.name}</h1>
                    <h1 className="font-semibold">{quote.designation}</h1>
                    <h1 className="max-w-[300px] mx-auto px-4">
                      "{quote.testimonial}"
                    </h1>
                  </div>
                </div>
              ))}
            </Glider>
          </div>
        </div>
      </Container>
    </div>
  );
}
