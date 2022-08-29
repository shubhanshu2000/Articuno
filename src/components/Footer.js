import React from "react";
import { ImArrowLeft2 } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <footer className="px-6 mt-14 flex items-center justify-between">
        <div className="flex justify-between  items-center">
          <ImArrowLeft2 />
          <p className="ml-4">Back</p>
        </div>
        <div>
          <button className="px-6  py-2 border-2  rounded-3xl hover:bg-gray-100 ml-4 border-[#b4adad]">
            CONTINUE SHOPPING
          </button>
          <button className="bg-[#50d2ab] text-white px-6  py-2 rounded-3xl hover:bg-[#46c29d] ml-4">
            PROCEED TO PAYMENT
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
