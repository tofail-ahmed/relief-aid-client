import { SubmitHandler, useForm } from "react-hook-form";

const SupplyForm = () => {
      const { handleSubmit, register,formState: { errors } } = useForm<FormData>();
      const onSubmit  = (data) => {
        console.log(data);
      };
      const double=true;
  return (
      <div>
      <div>
        <form
          className={cn("border border-green-950 p-4 max-w-lg mx-auto bg-green-600/40", {
            "max-w-4xl bg-red-600": double,
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <div className={cn("border border-blue-600 p-4  bg-slate-400/70 grid grid-cols-1 justify-items-center  gap-4", {
              "md:grid-cols-2 bg-green-600/90": double,
            })}>
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
                  {...register("name")}
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
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="age"
                >
                  Age
                </label>
                <select id="age" {...register("age", { required: "Age is required" })}>
                  <option value="">Select Age</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                </select>
                {errors.age && (
                  <span className="text-red-900 font-semibold">
                    {errors.age.message}
                  </span>
                )}
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    {...register("gender", { required: "Please select your gender" })}
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    id="female"
                    value="female"
                    {...register("gender", { required: "Please select your gender" })}
                  />
                  <label htmlFor="female">Female</label>

                  <input
                    type="radio"
                    id="other"
                    value="other"
                    {...register("gender", { required: "Please select your gender" })}
                  />
                  <label htmlFor="other">Other</label>
                </div>
                {errors.gender && (
                  <span className="text-red-900 font-semibold">
                    {errors.gender.message}
                  </span>
                )}
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className="block text-red-600 font-bold rounded-s-md"
                  htmlFor="terms"
                >
                  Accept Terms
                </label>
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", { required: "You must accept the terms" })}
                />
                {errors.terms && (
                  <span className="text-red-900 font-semibold">
                    {errors.terms.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-success">
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

export default SupplyForm