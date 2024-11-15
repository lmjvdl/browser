// frontend/src/pages/HomePage.tsx
import React, { useState } from "react";
import Browser from "../components/Browser";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <div className="bg-slate-400 w-full h-full flex flex-col">
        <Header></Header>
        <div className="flex justify-center items-center">
          <div className="bg-slate-500 p-6 text-center lg:w-3/5 md:w-3/4 sm:w-5/6 tablet shadow-md rounded-lg mt-32">
            <h1 className="text-slate-900 text-4xl font-bold mb-8">
              Web Search Engine
            </h1>
            <div className="p-4 mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>

            <Browser />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
