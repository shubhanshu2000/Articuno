import React from "react";
import Auth from "./Auth";
import ShippingInfo from "./ShippingInfo";

const AuthInfo = () => {
  return (
    <>
      <div className="w-[37.6%] flex flex-col">
        <Auth />
        <ShippingInfo />
      </div>
    </>
  );
};

export default AuthInfo;
