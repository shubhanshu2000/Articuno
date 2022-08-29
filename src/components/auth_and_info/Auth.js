import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const Auth = () => {
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, googleProvider);
      toast.success(`Welcome back ${authed.user.displayName}`);
      // console.log(authed.user.displayName);
    } catch (error) {
      toast.error("Invalid E-mail or Password");
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <button
          className="bg-[#50d2ab] text-white px-6  py-2 rounded-3xl hover:bg-[#46c29d]"
          onClick={handleGoogleLogin}
        >
          Log In
        </button>
        <button
          className="px-6  py-2 border-2 hover:text-white rounded-3xl hover:bg-[#50d2ab] ml-4 border-[#f1f1f1]"
          onClick={handleGoogleLogin}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Auth;
