import React, { ChangeEvent, FormEvent, useState } from "react";

import SectionHeader from "../../utils/SectionHeader";
import Container from "../../components/ui/Containert";
interface FormData {
      name: string;
      email: string;
      contactNumber: string;
      additionalInfo: string;
    }
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    additionalInfo: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Log form data
    // You can perform additional actions like sending data to server here
    alert("Info added successfully")
  };

  return (
    <div className="contactBg py-10">
      <Container className="text-black flex justify-between items-center lg:flex-row flex-col ">
        <div className="mx-auto text-center">
          <SectionHeader text="GET IN TOUCH" />
          <h3 className="text-lg font-semibold">
            Need to reach us about our donation project?
          </h3>
          <p className="text-slate-500 font-medium">
            Whether you have questions or want to get involved, <br /> contact
            us via email, phone, or social media. <br /> We're here and ready to
            make a difference with your support. <br /> Thank you for joining us
            in creating positive change <br /> through generosity and
            compassion.
          </p>
        </div>
        <div >
          <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-lg font-semibold">Name</h1>
            <input
              className="border-2 border-slate-300 p-2 lg:w-[500px] w-[300px] my-2 rounded-md bg-slate-400 text-black"
              type="text"
              name="name"
              placeholder="Input Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <h1 className="text-lg font-semibold">Email</h1>
            <input
              className="border-2 border-slate-300 p-2 lg:w-[500px] w-[300px] my-2 rounded-md bg-slate-400 text-black"
              type="text"
              name="email"
              placeholder="Input Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <h1 className="text-lg font-semibold">Contact Number</h1>
            <input
              className="border-2 border-slate-300 p-2 lg:w-[500px] w-[300px] my-2 rounded-md bg-slate-400 text-black"
              type="text"
              name="contactNumber"
              placeholder="Input Your Contact"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            <h1 className="text-lg font-semibold">Write additional Info</h1>
            <textarea
              className="border-2 border-slate-300 p-2 lg:w-[500px] w-[300px] my-2 rounded-md bg-slate-400 text-black"
              name="additionalInfo"
              placeholder="Write additional Info"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
           <div>
           <button className="bg-orange-500 hover:bg-slate-500 text-md font-semibol hover:text-white rounded-md px-2 py-1" type="submit">Submit</button>
           </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
