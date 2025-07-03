'use client'

import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { toast } from "react-toastify";

export default function Header() {
    // set up logic for dark mode at some point
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        toast.error("Not implemented yet!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }

  return (
    <div className="header">
      <h2>devfinder</h2>
      <div className="toggle-container">
      <span>dark</span>
        <button onClick={toggleTheme} className="theme-toggle">
          <IoIosMoon className="theme-icon" />
        </button>
      </div>
    </div>
  );
}
