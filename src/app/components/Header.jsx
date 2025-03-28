import { useState } from "react"


export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className="">
            <h1>devfinder</h1>
            {/* add dark/light toggle here */}
        </div>
    )
}