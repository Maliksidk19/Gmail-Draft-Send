"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="bg-white p-3 rounded-md hover:bg-neutral-100 text-sm mt-4 absolute top-0 right-0 mr-4"
    >
      Logout
    </button>
  );
};

export default Logout;
