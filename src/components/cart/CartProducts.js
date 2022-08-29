import React from "react";

const CartProducts = ({ img, name, desc, price, color }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm ">
          <img
            className="w-12 object-contain mr-4 bg-[#f7f7f7] h-12 "
            style={{ borderRadius: "50%" }}
            src={img}
            alt="clothes"
          />
          <div>
            <p>{name}</p>
            <p>{desc}</p>
            <p className="text-gray-300 mt-1">{color}</p>
          </div>
        </div>
        <p>${price}</p>
      </div>
    </>
  );
};

export default CartProducts;
