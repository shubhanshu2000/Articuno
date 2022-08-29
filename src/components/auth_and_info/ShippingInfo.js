import React from "react";
import bgSvg from "../../assets/down_arrow.svg";

const ShippingInfo = () => {
  return (
    <>
      <div>
        <h1 className="mt-6 mb-4">Shipping information</h1>
        <form>
          <div className="flex h-[14rem]  justify-between">
            <div className="flex  justify-between  flex-col">
              <input
                className="px-6 outline-none  py-2 border-[1px] rounded-3xl"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="px-6  py-2 outline-none border-[1px] rounded-3xl"
                type="text"
                name="first_name"
                placeholder="First name"
              />
              <input
                className="px-6  py-2 border-[1px] outline-none rounded-3xl"
                type="text"
                name="last_name"
                placeholder="Last name"
              />
              <input
                className="px-6 appearance-none  py-2 border-[1px] rounded-3xl outline-none"
                type="number"
                name="phone_number"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex justify-between flex-col">
              <input
                className="px-6  py-2 border-[1px] rounded-3xl outline-none"
                type="text"
                name="address"
                placeholder="Address"
              />
              <input
                className="px-6  py-2 border-[1px] rounded-3xl outline-none"
                type="text"
                name="city"
                placeholder="City"
              />
              <input
                className="px-6 appearance-none py-2 border-[1px] rounded-3xl outline-none"
                type="number"
                name="postal_code_zip"
                placeholder="Postal code / ZIP"
              />
              <select
                style={{ backgroundImage: `url(${bgSvg})` }}
                className="px-6 bg-[calc(100%_-_16px)_center] text-gray-400 bg-[length:24px] w-full bg-no-repeat appearance-none   py-2 border-[1px] rounded-3xl outline-none"
                name="country"
                id="country"
              >
                <option value="Poland">Poland</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShippingInfo;
