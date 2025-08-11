import { ArrowRightCircle } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "../../slices/authSlice";
import { sendOtp } from "../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // Save plain object to Redux (easier to handle later)
    dispatch(setSignupData(data));

    // Debug
    console.log("Signup Data:", data);

    // Send OTP
    dispatch(sendOtp(data.email, navigate));
  };

  return (
    <div className="border-2 rounded-lg shadow-lg z-10 bg-white p-6">
      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-xl font-semibold">Signup to SnapSocial</h1>
          <p className="text-gray-400 text-sm font-semibold">
            Welcome back! Please signup to continue
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm text-richblack-5" htmlFor="name">
              Name <sup className="text-red-500">*</sup>
            </label>
            <input
              id="name"
              placeholder="Enter Your name"
              {...register("name", { required: true })}
              className="form-style w-full placeholder:text-sm"
            />
            {errors.name && (
              <span className="ml-2 text-xs text-red-500">
                *Name is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-richblack-5" htmlFor="email">
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              id="email"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
              className="form-style w-full placeholder:text-sm"
            />
            {errors.email && (
              <span className="ml-2 text-xs text-red-500">
                *Email is required
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
              <span className="ml-2 text-xs text-red-500">
                *Password is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-md flex p-2 mt-1 text-sm gap-1 justify-center items-center text-center"
          >
            Continue <ArrowRightCircle className="text-white" size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
