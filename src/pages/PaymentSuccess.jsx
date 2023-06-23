import React from "react";
import { useSearchParams } from "react-router-dom";

export const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <div>
      <div h="100vh" justifyContent={"center"}>
        <div textTransform={"uppercase"}> Order Successfull</div>

        <div>Reference No.{referenceNum}</div>
      </div>
    </div>
  );
};
