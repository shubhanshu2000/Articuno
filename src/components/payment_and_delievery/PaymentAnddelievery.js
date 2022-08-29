import React from "react";
import Delievery from "./Delievery";
import Payment from "./Payment";

const PaymentAnddelievery = () => {
  return (
    <>
      <div className="w-1/3">
        <Payment />
        <Delievery />
      </div>
    </>
  );
};

export default PaymentAnddelievery;
