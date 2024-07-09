"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <section className="flex justify-center items-center h-[100vh] flex-col">
      <h2>Welcome Back!</h2>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-600/90 text-sm mt-4"
      >
        Login with Google
      </button>
    </section>
  );
};

export default LoginPage;
