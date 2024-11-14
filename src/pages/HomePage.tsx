// frontend/src/pages/HomePage.tsx
import React, { useState } from 'react';
import Browser from '../components/Browser';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Web Search Engine
      </h1>
      
      <div className="bg-white shadow-md rounded-lg p-4 mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <Browser />
    </div>
  );
};

export default HomePage;
