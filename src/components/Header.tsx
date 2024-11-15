// frontend/src/components/SearchBar.tsx
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [dateState, setDateState] = useState(new Date());
  const t = new Date();
  const c = t.getHours() - 12;
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 1000);
  }, []);

  return (
    <div className="flex flex-row bg-gray-800 w-full p-3">
      <div className="flex-2 pointer-events-auto justify-end items-start">
        <div className="relative w-16 h-16 ml-5 pointer-events-auto overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border-slate-400 border-2">
          <svg
            className="absolute w-16 h-16 text-gray-900 -left-1"
            fill="currentColor"
            viewBox="0 0 18 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div className="flex-1 pointer-events-auto justify-end items-start ml-8">
        <div className="mt-4 text-3xl font-normal tracking-tight leading-none text-white-900 dark:text-white">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "2-digit",
            hour12: true,
          })}
        </div>
      </div>
      <div className="flex-2 pointer-events-auto justify-center items-center pr-3 pt-3">
        <button
          type="submit"
          className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Register
        </button>
        <button
          type="submit"
          className="text-white end-2.5 ml-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
