// frontend/src/pages/HomePage.tsx
import React, { useState } from "react";
import Browser from "../components/Browser";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import searchResults from "../utils/TestFiles/testReult";
import SearchResults from "./ResultsPage/searchResults";
import HeaderForSearchResult from "../components/HeaderForSearchResult";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setShowResults(true);
  };
  return (
    <>
      <div className="bg-slate-400 w-full h-100 flex flex-col">
        {!showResults && (
          <>
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
          </>
        )}
        {showResults && (
          <>
            <HeaderForSearchResult></HeaderForSearchResult>
            <div>
              <SearchResults searchResults={searchResults} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
