import React from "react";
import inPost from "../../assets/delievery/inpost.svg";
import dpd from "../../assets/delievery/dpd.png";
import dhl from "../../assets/delievery/dhl-logo.svg";
import fedEx from "../../assets/delievery/fedx.png";

const Delievery = () => {
  return (
    <>
      <div>
        <h1 className="mt-8 mb-6">Delievery method</h1>
        <div>
          <div className="flex w-[22rem] justify-between mt-6">
            <div className="w-[10.7rem] ">
              <div
                style={{ backgroundImage: `url(${inPost})` }}
                className="bg-[calc(0%+16px)_center]  bg-[length:40px] bg-no-repeat  border-2 px-4 py-2 hover:border-[#ffdfb3] cursor-pointer  rounded-2xl "
              >
                <span className="flex justify-end">$20.00</span>
              </div>
            </div>
            <div className="w-[10.7rem]">
              <div
                style={{ backgroundImage: `url(${dpd})` }}
                className="bg-[calc(0%+16px)_center]  bg-[length:40px] bg-no-repeat  border-2 px-4 py-2 hover:border-[#ffdfb3] cursor-pointer  rounded-2xl "
              >
                <span className="flex justify-end">$12.00</span>
              </div>
            </div>
          </div>
          <div className="flex w-[22rem] justify-between mt-2">
            <div className="w-[10.7rem] ">
              <div
                style={{ backgroundImage: `url(${dhl})` }}
                className="bg-[calc(0%+16px)_center] bg-[length:40px] bg-no-repeat  border-2 px-4 py-2 hover:border-[#ffdfb3] cursor-pointer  rounded-2xl "
              >
                <span className="flex justify-end">$15.00</span>
              </div>
            </div>
            <div className="w-[10.7rem]">
              <div
                style={{ backgroundImage: `url(${fedEx})` }}
                className="bg-[calc(0%+10px)_center]  bg-[length:60px] bg-no-repeat  border-2 px-4 py-2 hover:border-[#ffdfb3] cursor-pointer  rounded-2xl "
              >
                <span className="flex justify-end">$10.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delievery;
