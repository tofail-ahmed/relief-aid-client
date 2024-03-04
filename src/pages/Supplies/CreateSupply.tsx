import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from '../../libs/utils';

const CreateSupply = () => {
  const { handleSubmit, register,formState: { errors } } = useForm<FormData>();
  const onSubmit  = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <form
          className={cn("border border-green-950 p-4 max-w-lg mx-auto bg-green-600/40")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="formInput"
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name",{required:"Name is required"})}
                />
                {errors.name && (
                  <span className="text-red-900 font-semibold">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="formInput"
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-900 font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="formInput"
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-red-900 font-semibold">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <span className="text-red-900 font-semibold">
                    {errors.address.message}
                  </span>
                )}
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="textarea"
                >
                  Address
                </label>
                <textarea id="textarea" {...register("textarea", { required: "Textarea is required" })}></textarea>
                {errors.textarea && (
                  <span className="text-red-900 font-semibold">
                    {errors.textarea.message}
                  </span>
                )}
              </div>
             
         
              
         
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-500 p-2 rounded-md ">
              Submit
            </button>
          </div>
          <div>
         
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateSupply