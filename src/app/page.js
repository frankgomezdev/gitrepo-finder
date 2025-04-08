import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DevInfo from "./components/DevInfo";
import { ToastContainer } from "react-toastify";


export default function Home() {
    return (
      <main className="main-container">
        <ToastContainer/>
        <Header />
        <SearchBar />
        <DevInfo />
      </main>
    )
}
