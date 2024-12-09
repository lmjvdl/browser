import { Pagination } from "@mantine/core";
import React, { useState } from "react";

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

interface SearchResultsProps {
  searchResults: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
  searchResults }) => {
  const [activePage, setPage] = useState(1);
  return (
    <div>
      <div>
        <div className="text-3xl font-bold mb-4 mt-4 mx-auto flex justify-center items-center bg-slate-300 w-3/5 rounded-xl py-2">
          <h1 className="text-5xl text-orange-600 inline">S</h1>
          <h1 className="text-green-600 inline">e</h1>
          <h1 className="text-red-900 inline">a</h1>
          <h1 className="text-yellow-600 inline">r</h1>
          <h1 className="text-yellow-100 inline">c</h1>
          <h1 className="text-teal-500 inline">h</h1>
          <h5 className="text-5xl text-blue-950 inline">R</h5>
          <h5 className="text-blue-950 inline">esult</h5>
        </div>
        <div className="ml-10 mb-6">
          <div className="text-[#1506e7]">
            <span>These are results for: </span>
            <span>خرید کفش </span>
          </div>
          <div className="text-[#a82929]">
            <span>Search instead for:</span>
            <span className="line-through pl-2  text-xl">خرد کفش</span>
          </div>
        </div>
        <div className="justify-center content-center w-8/12">
          <ul className="ml-10">
            {searchResults.map((result) => (
              <li key={result.title} className=" bg-slate-300 mb-2 p-8 rounded-xl">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 10 48 35" className="inline">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                  <span className="text-2xl ml-3 text-gray-800">دیجی کالا</span>
                </div>
                <a
                  href="google.com"
                  className="text-blue-800 hover:underline block">
                  {result.title}
                </a>
                <a
                  href="google.com"
                  className="text-blue-800 hover:underline block">
                  {result.url}
                </a>
                <p className="text-gray-900">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Pagination
          total={searchResults.length/10}
          // onChange={}
          value={1}
          className="justify-center content-center flex my-10"
        />
      </div>
    </div>
  );
};

export default SearchResults;
