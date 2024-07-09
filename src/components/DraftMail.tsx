"use client";
import authorize from "@/lib/Email";
import React from "react";

const DraftMail = () => {
  const SendMail = async () => {
    authorize();
  };
  return (
    <button
      className="bg-blue-600 text-white p-3 rounded-md mt-4 hover:bg-blue-600/90 text-sm"
      onClick={SendMail}
    >
      Send Draft Mail
    </button>
  );
};

export default DraftMail;
