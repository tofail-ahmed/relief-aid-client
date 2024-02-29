import React from "react";
import Container from "../../components/ui/Containert";
import SectionHeader from "../../utils/SectionHeader";

const Contact = () => {
  return (
    <div>
      <Container className="text-black flex justify-between items-center lg:flex-row flex-col ">
        <div className="mx-auto text-center">
          <SectionHeader text="GET IN TOUCH" />
          {/* <h1 className="text-4xl font-extrabold text-orange-500">GET IN TOUCH</h1> */}
          <h3 className="text-lg font-semibold">Need to reach us about our donation project?</h3>
          <p>
            {" "}
            Whether you have questions or want to get involved, <br /> contact
            us via email, phone, or social media. <br /> We're here and ready to
            make a difference with your support. <br /> Thank you for joining us
            in creating positive change <br /> through generosity and
            compassion.
          </p>
        </div>
        <div className="flex flex-col mx-auto">
          <h1>Name</h1>
          <input
            className="border-2 border-slate-300 p-2 lg:w-[500px] w-[400px] my-2 rounded-md bg-slate-400 text-black"
            type="text"
            placeholder="Input Your Name"
          />
          <h1>Email</h1>
          <input
            className="border-2 border-slate-300 p-2 lg:w-[500px] w-[400px] my-2 rounded-md bg-slate-400 text-black"
            type="text"
            placeholder="Input Your Email"
          />
          <h1>Contact Number</h1>
          <input
            className="border-2 border-slate-300 p-2 lg:w-[500px] w-[400px] my-2 rounded-md bg-slate-400 text-black"
            type="text"
            placeholder="Input Your Contact"
          />
          <h1>Write additional Info</h1>
          <textarea
            className="border-2 border-slate-300 p-2 lg:w-[500px] w-[400px] my-2 rounded-md bg-slate-400 text-black"
            name=""
            id=""
            rows="2"
            placeholder="Write additional Info"
          ></textarea>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
