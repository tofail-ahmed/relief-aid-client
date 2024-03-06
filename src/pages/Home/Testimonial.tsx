// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useTestimonialQuery } from "../../redux/testimonials/TestimonialApi";
// import Container from "../../components/ui/Containert";

// interface IQuote {
//   img: string;
//   name: string;
//   designation: string;
//   testimonial: string;
// }

// function Testimonial() {
//   const { data, isLoading } = useTestimonialQuery("");

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className=" py-10">
//       <Container>
//         <Slider {...settings}>
//           {data?.data.map((quote: IQuote, index: number) => (
//             <div key={index} className="my-10 text-center">
//               <div>
//                 <img
//                   className="rounded-full size-[100px] mx-auto "
//                   src={quote.img}
//                   alt=""
//                 />
//                 <h1 className="font-bold text-xl text-black">{quote.name}</h1>
//                 <h1 className="font-semibold text-black">{quote.designation}</h1>
//                 <h1 className="max-w-[300px] mx-auto text-black">
//                   "{quote.testimonial}"
//                 </h1>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </Container>
//     </div>
//   );
// }

// export default Testimonial;
