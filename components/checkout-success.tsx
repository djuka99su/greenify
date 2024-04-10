"use client";

import React, { useEffect } from "react";
import { Toaster, toast } from "sonner";

export const CheckOutSuccess = () => {

  useEffect(() => {
    toast.success("Payment successful!")
  },[])  
  return (
    <div className="h-4/5 flex justify-center items-center">
      <Toaster />
      <div className="bg-emerald-500 p-10 space-y-2 text-center rounded text-white">
        <h2 className="text-3xl font-bold">Confiramtion Page</h2>
        <h2>UNDER DEVELOPMENT 😎</h2>
      </div>
    </div>
  );
};
