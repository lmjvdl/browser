import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import SearchResults from "./ResultsPage/searchResults";
import "../styles/other.scss";
import useResultQuery from "../components/useSearch";
import SearchBarForHeader from "../components/searchBarForHeader";

const HomePage: React.FC = () => {
  const { reportQuery } = useResultQuery();

  return (
      <div className="bg-slate-400 w-full min-h-full flex flex-col">
        <SearchResults query={reportQuery} />
      </div>
  );
};

export default HomePage;
