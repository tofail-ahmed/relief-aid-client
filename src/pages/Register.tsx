/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/auth/authApi";
interface FormData {
  name: string;
  email: string;
  password: string;
}
const Register = () => {
      const navigate = useNavigate();

  const [registration] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data:FormData) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const res = await registration(userInfo);
//     console.log(res.data);
    if('data' in res && res.data && res.data.success === true){
      alert("user registered successfully")
      navigate("/login")
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Register
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Name"
                {...register("name", { required: "Name is required" })}
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Name"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">
                  {(errors.name as any).message}
                </p>
              )}
            </div>
            <div className="-mt-px">
              <input
                aria-label="Email address"
                {...register("email", { required: "Email is required" })}
                type="email"
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">
                  {(errors.email as any).message}
                </p>
              )}
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                {...register("password", { required: "Password is required" })}
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">
                  {(errors.password as any).message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-black">
          <p>
            Already have an account?{" "}
            <Link className="font-bold underline" to={"/login"}>
              Login to Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
