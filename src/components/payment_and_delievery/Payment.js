import React from "react";
import paypal from "../../assets/payment/paypal.svg";
import visa from "../../assets/payment/visa.png";
import masterCard from "../../assets/payment/master-card.svg";
import maestro from "../..//assets/payment/maestro.png";
import discover from "../../assets/payment/discover-logo.webp";
import ideal from "../../assets/payment/ideal.png";

const Payment = () => {
  return (
    <>
      <div>
        <h1>Payment method</h1>
        <div>
          <div className="flex w-[22rem] justify-between mt-6">
            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${paypal})` }}
                className="bg-center  bg-[length:60px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${visa})` }}
                className="bg-center  bg-[length:35px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${masterCard})` }}
                className="bg-center  bg-[length:32px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>
          </div>
          <div className="flex w-[22rem] justify-between mt-2">
            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${maestro})` }}
                className="bg-center  bg-[length:35px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${discover})` }}
                className="bg-center  bg-[length:60px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${ideal})` }}
                className="bg-center  bg-[length:26px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
