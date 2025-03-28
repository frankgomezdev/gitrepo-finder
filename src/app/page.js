'use client';

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
export default function Home() {
    return (
      <main className="main-container">
        <Header />
        <SearchBar />
      </main>
    )
}
