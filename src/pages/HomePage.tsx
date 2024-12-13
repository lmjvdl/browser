import React, { useState } from "react";
import Browser from "../components/Browser";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import searchResults from "../utils/TestFiles/testReult";
import SearchResults from "./ResultsPage/searchResults";
import HeaderForSearchResult from "../components/HeaderForSearchResult";
import "../styles/other.scss";
import useResultQuery from "../components/useSearch";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);
  const { reportQuery, setVariables } = useResultQuery();

  return (
    <>
      <div className="bg-slate-400 w-full min-h-full flex flex-col">
        {!showResults && (
          <>
            <Header />
            <div className="flex justify-center items-center">
              <div className="bg-slate-500 p-6 text-center lg:w-3/5 md:w-3/4 sm:w-5/6 tablet shadow-md rounded-lg mt-32">
                <h1 className="typed-out text-9xl text-orange-600 inline">G</h1>
                <h1 className="typed-out text-7xl text-green-600 inline">o</h1>
                <h1 className="typed-out text-7xl text-red-900 inline">T</h1>
                <h1 className="typed-out text-7xl text-yellow-600 inline">o</h1>
                <h1 className="typed-out text-7xl text-yellow-100 inline">S</h1>
                <h1 className="typed-out text-7xl text-teal-500 inline">e</h1>
                <h5 className="typed-out text-7xl text-violet-800 inline">a</h5>
                <h5 className="typed-out text-7xl text-pink-700 inline">r</h5>
                <h5 className="typed-out text-7xl text-purple-300  inline">
                  c
                </h5>
                <h5 className="typed-out text-7xl text-blue-950 inline">h</h5>
                <div className="p-4 mb-8">
                  <SearchBar setInputs={setVariables}/>
                </div>
                <Browser />
              </div>
            </div>
          </>
        )}
        {showResults && (
          <>
            <HeaderForSearchResult />
            <div>
              <SearchResults query={reportQuery} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
