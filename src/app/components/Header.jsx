import { useState } from "react";
import { IoIosMoon } from "react-icons/io";

export default function Header() {
    // set up logic for dark mode at some point
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        console.log("button has been clicked!")
    }

  return (
    <div className="header">
      <h1>devfinder</h1>
      <div className="toggle-container">
      <span>dark</span>
        <button onClick={toggleTheme} className="theme-toggle">
          <IoIosMoon className="theme-icon" />
        </button>
      </div>
    </div>
  );
}
