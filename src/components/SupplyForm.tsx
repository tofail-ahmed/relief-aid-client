import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "../libs/utils";

const SupplyForm = () => {
      const { handleSubmit, register,formState: { errors } } = useForm<FormData>();
      const onSubmit  = (data) => {
        console.log(data);
      };
      // const double=false;
  return (
    <div>
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
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="text-orange-900 font-semibold">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="text-orange-900 font-semibold">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="p-2 rounded-md"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <div className="text-orange-900 font-semibold">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="p-2 rounded-md"
                type="text"
                id="address"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <div className="text-orange-900 font-semibold">
                  {errors.address.message}
                </div>
              )}
            </div>
            <div className="w-[70%] max-w-md flex flex-col justify-center">
              <label
                className="block text-orange-600 font-bold rounded-s-md"
                htmlFor="textarea"
              >
                Address
              </label>
              <textarea
                className="p-2 rounded-md"
                id="textarea"
                {...register("textarea", { required: "Textarea is required" })}
              ></textarea>
              {errors.textarea && (
                <div className="text-orange-900 font-semibold">
                  {errors.textarea.message}
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