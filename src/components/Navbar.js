import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Toggle.css";

export default function Navbar() {
  const notify = () => toast("Theme preference changed!");
  return (
    <>
      <div className="grid justify-items-end ">
        <label class="switch">
          <input onFocus={notify} type="checkbox" />
          <span class="slider round"></span>
          <ToastContainer />
        </label>
        Dark Mode
      </div>
    </>
  );
}
