import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "../libs/utils";
import SectionHeader from "../utils/SectionHeader";
import { useSingleSupplyQuery, useUpdateSupplyMutation } from "../redux/supply/supplyApi";

interface IFormData {
  title: string;
  category: string;
  amount: number;
  image: string;
  description: string;
 
}
interface ISupplyFormProp{
  id:string;
}
const SupplyForm = ({id}:ISupplyFormProp) => {
  const {data:supplyData}=useSingleSupplyQuery(id);
  const [updateSupply]=useUpdateSupplyMutation()
      const { handleSubmit, register,formState: { errors } } = useForm<IFormData>();
      const onSubmit:SubmitHandler<IFormData>  = (data) => {
        const modifiedData = {
          ...data,
          title: data.title,
          category: data.category,
          amount: data.amount,
          image: data.image,
          description: data.description
        };
        updateSupply({id,body:modifiedData});
        alert("Data updated successfully")
      };
          


  return (
    <div className="bg-slate-400">
      <SectionHeader className="text-center py-8" text={"Edit your Supply Post"}></SectionHeader>
      
      <div>
        <form
          className={cn(
            "border border-green-950 p-4 lg:w-[500px]  bg-slate-400"
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
              defaultValue={supplyData?.data.title}
                className="p-2 rounded-md text-black"
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
              defaultValue={supplyData?.data.category}
                className="p-2 rounded-md text-black"
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
              defaultValue={supplyData?.data.image}
                className="p-2 rounded-md text-black"
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
              defaultValue={supplyData?.data.amount}
                className="p-2 rounded-md text-black"
                type="number"
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
              defaultValue={supplyData?.data.description}
                className="p-2 rounded-md text-black"
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
  );
}

export default SupplyForm