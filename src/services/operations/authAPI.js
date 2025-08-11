import toast from "react-hot-toast";

import { setToken, setUser } from "../../slices/authSlice";
import { endpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const { SENDOTP_API, SIGNUP_API, LOGIN_API } = endpoints;

export function sendOtp(email, navigate) {
  return async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    toast.dismiss(toastId);
  };
}

export function signUp(name, email, password, otp, navigate) {
  return async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        name,
        email,
        password,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Sign Up Successful");
      navigate("/");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Sign Up Failed");
      navigate("/signup");
    }
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      // navigate("/feed");
    } catch (error) {
      toast.error(error.response.data.message || "Login Failed");
      console.log("LOGIN API ERROR............", error);
    }
    toast.dismiss(toastId);
  };
}
