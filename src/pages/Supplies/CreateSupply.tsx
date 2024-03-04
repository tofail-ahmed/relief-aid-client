import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from '../../libs/utils';
import SectionHeader from '../../utils/SectionHeader';
import { useCreateSupplyMutation } from '../../redux/supply/supplyApi';

const CreateSupply = () => {
  const [createSupply,{data,isLoading}]=useCreateSupplyMutation()
  const { handleSubmit, register,formState: { errors } } = useForm<FormData>();
  const onSubmit  = (supply) => {

    createSupply(supply);
    console.log(data)
    
  };
    useEffect(() => {
    if (isLoading) {
      alert("Supply adding in process, please wait...");
    }
    if (data && data.success) {
      alert("Supply added successfully");
    } else if (data) {
      alert("Supply not saved");
    }
  }, [data, isLoading]);
  return (
    <div className='flex justify-center flex-col items-center'>
      <SectionHeader className=' my-8' text='Add Supply Post'></SectionHeader>
      <div>
        <form
          className={cn(
            "border border-green-950 p-4 lg:w-[500px] text-black  bg-slate-400"
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center  flex-col items-center mx-auto space-y-4">
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="title"
                placeholder="Title"
                {...register("title", { required: "Name is required" })}
              />
              {errors.title && (
                <div className="text-orange-900 font-semibold">
                  {errors.title.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="category"
              >
                Category
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="category"
                placeholder="Category"
                {...register("category", { required: "Category is required" })}
              />
              {errors.category && (
                <div className="text-orange-900 font-semibold">
                  {errors.category.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="image"
                placeholder="Image"
                {...register("image", { required: "Image is required" })}
              />
              {errors.image && (
                <div className="text-orange-900 font-semibold">
                  {errors.image.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="amount"
                placeholder="Amount"
                {...register("amount", { required: "Amount is required" })}
              />
              {errors.amount && (
                <div className="text-orange-900 font-semibold">
                  {errors.amount.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="p-2 rounded-md"
                id="description"
                {...register("description", { required: "Description is required" })}
              ></textarea>
              {errors.description && (
                <div className="text-orange-900 font-semibold">
                  {errors.description.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-slate-500 text-lg text-black  hover:text-white rounded-md px-2 py-1 my-4 duration-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateSupply