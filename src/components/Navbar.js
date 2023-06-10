import React from "react";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const notify = () => toast("Theme preference changed!");
  return (
    <>
      <div className="grid justify-items-end"></div>
    </>
  );
}
