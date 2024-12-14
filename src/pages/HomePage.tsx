import React, { useState } from "react";
import SearchResults from "./ResultsPage/searchResults";
import useResultQuery from "../components/useSearch";
import "../styles/other.scss";

const HomePage: React.FC = () => {
  const { reportQuery } = useResultQuery();

  return (
      <div className="bg-slate-400 w-full min-h-full flex flex-col">
        <SearchResults query={reportQuery} />
      </div>
  );
};

export default HomePage;
