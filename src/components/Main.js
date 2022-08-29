import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";

import AuthInfo from "./auth_and_info/AuthInfo";
import Cart from "./cart/Cart";
import PaymentAnddelievery from "./payment_and_delievery/PaymentAnddelievery";

const Main = () => {
  return (
    <>
      <div className="px-6">
        <div className="flex justify-between mt-10 mb-8 items-center">
          <h1 className="font-medium">Shipping and Payment</h1>
          <div className="flex items-center  text-lg w-[11%] justify-between">
            <div className="border-[#50d2ab] border-[1px] rounded-3xl p-1">
              <IoCartOutline />
            </div>
            <hr className="w-2/5" />
            <div className="bg-[#50d2ab] text-white -scale-x-100  rounded-3xl   p-1">
              <RiTruckLine />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <AuthInfo />
          <PaymentAnddelievery />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Main;
