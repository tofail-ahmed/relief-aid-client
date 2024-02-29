
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTestimonialQuery } from "../../redux/testimonials/TestimonialApi";
import Container from "../../components/ui/Containert";
interface IQuote{
      img:string;
      name:string;
      designation:string;
      testimonial:string;
}
function Testimonial() {
  const { data, isLoading } = useTestimonialQuery("");
//   console.log(data);
  if (isLoading) {
    return <div>Loadng...</div>;
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
//     prevArrow: (
//       <button
//         className="slick-prev text-black border-2 border-red-500 bg-pink-700"
//         aria-label="Previous"
//       />
//     ),
//     nextArrow: (
//       <button
//         className="slick-next text-black border-2 border-red-500 bg-pink-700"
//         aria-label="Next"
//       />
//     ),
  };
  return (
    <div className="testimonialBg  py-10">
      <Container className="slider-container text-black mx-auto  border-2 border-slate-300 ">
        <Slider {...settings}>
          {data?.data.map((quote:IQuote) => (
            <div className=" m-10 text-center  ">
             <div >
             <img
                className="rounded-full size-[100px] mx-auto border-2 border-zinc-300 -mt-8"
                src={quote.img}
                alt=""
              />
              <h1 className={"font-bold text-xl"}>{quote.name}</h1>
              <h1 className={"font-semibold"}>{quote.designation}</h1>
              <h1 className={"max-w-[300px] text-center mx-auto"}>"{quote.testimonial}"</h1>
             </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Testimonial;
