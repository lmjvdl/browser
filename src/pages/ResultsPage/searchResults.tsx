import React from "react";

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

interface SearchResultsProps {
  searchResults: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div className="">
      <div className="text-3xl font-bold mb-4 mt-4 mx-auto flex justify-center items-center bg-slate-300 w-3/5 rounded-xl py-2">
        <h1 className="text-5xl text-orange-600 inline">S</h1>
        <h5 className="text-blue-950 inline">earch result</h5>
      </div>
      <div className="ml-10 mb-6 text-[#00008B]">
        <div>
          <span>These are results for: </span>
          <span>خرید کفش </span>
        </div>
        <div>
          <span>Search instead for:</span>
          <span className="line-through pl-2 text-2xl">خر د کفش</span>
        </div>
      </div>
      <ul className="ml-20">
        {searchResults.map((result) => (
          <li key={result.title} className="mb-2">
            <a
              href="google.com"
              className="text-blue-500 hover:underline block">
              {result.title}
            </a>
            <a
              href="google.com"
              className="text-blue-500 hover:underline block">
              {result.url}
            </a>
            <p className="text-gray-600">{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
