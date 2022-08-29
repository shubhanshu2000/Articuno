import React from "react";
import CartProducts from "./CartProducts";
import t1 from "../../assets/cart/t-1.png";
import t2 from "../../assets/cart/t-2.png";
import { RiTruckLine } from "react-icons/ri";
const Cart = () => {
  const productArr = [
    {
      img: t1,
      name: "T-Shirt",
      desc: "Summer Vibes",
      price: 89.99,
      color: "#261311",
    },
    {
      img: t2,
      name: "Basic Slim",
      desc: "Fit T-Shirt",
      price: 69.99,
      color: "#212315",
    },
  ];
  return (
    <>
      <div className="w-[18rem]">
        <h1 className="mb-6">Your Cart</h1>
        {productArr.map(({ img, name, desc, price, color }) => {
          return (
            <CartProducts
              img={img}
              name={name}
              desc={desc}
              price={price}
              color={color}
            />
          );
        })}

        <div className="flex items-center mx-auto mt-6  justify-around bg-gray-100 px-4 py-2 rounded-3xl w-11/12">
          <p>Total cost</p>
          <p>$159,98</p>
        </div>

        <div className="flex w-4/5 mx-auto mt-10 justify-between items-center">
          <RiTruckLine />
          <p className="w-2/3">
            You are <span>$30,02</span> away from free shipping!
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
