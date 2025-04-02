'use client';

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DevInfo from "./components/DevInfo";
export default function Home() {
    return (
      <main className="main-container">
        <Header />
        <SearchBar />
        <DevInfo />
      </main>
    )
}
