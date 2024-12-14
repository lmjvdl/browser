import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import useResultQuery from "./useSearch";
import SearchBarForHeader from "./searchBarForHeader";
import SearchBox from "./SearchBox";

const HeaderForSearchResult: React.FC = () => {
  const [dateState, setDateState] = useState(new Date());
  const [showSearchBar, setShowSearchBar] = useState(true);
  const { setVariables } = useResultQuery();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDateState(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    navigate("/search");
  }, []);
  

  return (
    <>
      <div className="flex flex-row bg-gray-800 w-full p-3">
        <div className="flex-2 pointer-events-auto justify-end items-start">
          <div className="relative w-16 h-16 ml-5 pointer-events-auto overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border-slate-400 border-2">
            <svg
              className="absolute w-16 h-16 text-gray-900 -left-1"
              fill="currentColor"
              viewBox="0 0 18 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div className="flex-2 pointer-events-auto justify-end items-start ml-8">
          <div className="mt-4 text-3xl font-normal tracking-tight leading-none text-white-900 dark:text-white">
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "2-digit",
              hour12: true,
            })}
          </div>
        </div>
        <div className="flex-1 mr-28 mt-1">
          <SearchBarForHeader setInputs={setVariables}></SearchBarForHeader>
        </div>
        <div className="flex-2 pointer-events-auto justify-center items-center pr-3 pt-3">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-white end-2.5 ml-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign up / Sign in
          </button>
        </div>
      </div>
      {showSearchBar && (
        <>
          <SearchBox show={showSearchBar}>
            <div className="bg-slate-500 text-center lg:w-3/5 md:w-3/4 sm:w-5/6 tablet shadow-md rounded-lg mt-7">
              <div className="mt-3">
                <h1 className="typed-out text-6xl text-yellow-500 inline">G</h1>
                <h1 className="typed-out text-3xl text-blue-950 inline">o</h1>
                <h1 className="typed-out text-4xl text-yellow-500 inline">T</h1>
                <h1 className="typed-out text-3xl text-blue-950 inline">o</h1>
                <h1 className="typed-out text-4xl text-yellow-500 inline">S</h1>
                <h5 className="typed-out text-3xl text-blue-950 inline">earch</h5>
              </div>
              <div className="mb-4 mt-4">
              <SearchBar
                  onClick={() => console.log("Navigating...")}
                  show={showSearchBar}
                  setInputs={setVariables}
                />
              </div>
            </div>
          </SearchBox>
        </>
      )}
    </>
  );
};

export default HeaderForSearchResult;
