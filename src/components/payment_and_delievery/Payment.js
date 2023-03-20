import React, { useEffect } from "react";
import paypal from "../../assets/payment/paypal.svg";
import visa from "../../assets/payment/visa.png";
import masterCard from "../../assets/payment/master-card.svg";
import maestro from "../..//assets/payment/maestro.png";
import discover from "../../assets/payment/discover-logo.webp";
import ideal from "../../assets/payment/ideal.png";

const Payment = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  async function razorPay() {
    const data = await fetch("https://payment1.onrender.com/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "Pay Now",
      description: "Wallet Transaction",
      image: "https://articunobackend.herokuapp.com/",
      order_id: data.id,
      // handler: function (response) {
      //   alert("PAYMENT ID ::" + response.razorpay_payment_id);
      //   alert("ORDER ID :: " + response.razorpay_order_id);
      // },
      prefill: {
        name: "Shubhanshu Singh",
        email: "shubhanshusingh@example.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      <div>
        <h1>Payment method</h1>
        <div>
          <div className="flex w-[22rem] justify-between mt-6">
            <div className="w-[7rem]">
              <div
                style={{ backgroundImage: `url(${paypal})` }}
                onClick={razorPay}
                className="bg-center  bg-[length:60px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                onClick={razorPay}
                style={{ backgroundImage: `url(${visa})` }}
                className="bg-center  bg-[length:35px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                onClick={razorPay}
                style={{ backgroundImage: `url(${masterCard})` }}
                className="bg-center  bg-[length:32px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>
          </div>
          <div className="flex w-[22rem] justify-between mt-2">
            <div className="w-[7rem]">
              <div
                onClick={razorPay}
                style={{ backgroundImage: `url(${maestro})` }}
                className="bg-center  bg-[length:35px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                onClick={razorPay}
                style={{ backgroundImage: `url(${discover})` }}
                className="bg-center  bg-[length:60px] bg-no-repeat  border-2 px-2 py-5 hover:border-[#ffdfb3] cursor-pointer  rounded-3xl "
              ></div>
            </div>

            <div className="w-[7rem]">
              <div
                onClick={razorPay}
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
