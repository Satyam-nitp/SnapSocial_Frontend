import { ArrowRightCircle } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const submitHandler=async(data)=>{
    const formData = new FormData();
    formData.append("email",data.email);
    formData.append("password",data.password);
    console.log(formData);
  }

  return (
    <div className="border-2 rounded-lg shadow-lg z-10 bg-white p-6">
      <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-xl font-semibold">Signin to SnapSocial</h1>
          <p className="text-gray-400 text-sm font-semibold">
            Welcome back! Please sign in to continue
          </p>
        </div>

        <div className="flex flex-col gap-3">

          {/* Email */}
          <div className="flex flex-col">
            <label
              className="text-sm text-richblack-5"
              htmlFor="email"
            >
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              id="email"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
              className="form-style w-full placeholder:text-sm"
            />
            {errors.email && (
              <span className="ml-2 text-xs text-black">
                Email is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              className="text-sm text-richblack-5 tracking-wider"
              htmlFor="password"
            >
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
              className="form-style w-full placeholder:text-sm"
            />
            {errors.password && (
              <span className="ml-2 text-xs text-black">
                Password is required
              </span>
            )}
          </div>

          <button className="w-full bg-black text-white rounded-md flex p-2 mt-1 text-sm gap-1 justify-center items-center text-center">Continue <ArrowRightCircle className="text-white" size={16}/> </button>
          <p className="text-[15px]">Dont't have an account? <span className="font-bold">Sign up</span></p>

        </div>
      </form>
    </div>
  );
};

export default Signin;
