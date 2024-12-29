import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Popover } from "@mantine/core";
import useSuggestion from "./useSuggestion";
import { SetVariablesType } from "./useSearch";
import allUrls from "../utils/API/URLs";

interface InputCenterProps {
  setInputs: SetVariablesType;
  show: boolean;
}

export default function SearchBar({ setInputs, show }: InputCenterProps) {
  const [querySearch, setQuerySearch] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { suggestionQuery, setVariables } = useSuggestion();

  useEffect(() => {
    if (querySearch.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoading(true);
    setShowSuggestions(true);

    const timeoutId = setTimeout(() => {
      setVariables({ querySearch });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [querySearch, setVariables]);

  useEffect(() => {
    if (suggestionQuery.data?.suggestions) {
      setSuggestions(suggestionQuery.data.suggestions);
      setLoading(false);
    }
  }, [suggestionQuery.data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
  };

  const handleInputFocus = async () => {
    if (querySearch.trim()) return;

    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      const response = await fetch(`${allUrls.histories}?user_id=${encodeURIComponent(userId)}`, {
        method: "GET",
      });

      if (!response.ok) {
        console.error("Failed to fetch histories");
        return;
      }

      const data = await response.json();
      const uniqueHistories: Array<string> = Array.from(new Set(data.histories || [])); // حذف مقادیر تکراری
      setHistory(uniqueHistories);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching histories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setQuerySearch(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputs({
      querySearch,
      page: 1,
      user_id: localStorage.getItem("userId") || "",
    });
    if (querySearch.trim() !== "") {
      navigate("/search");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (selectedIndex !== null && suggestions[selectedIndex]) {
        handleSelectSuggestion(suggestions[selectedIndex]);
        setShowSuggestions(false);
      } else if (querySearch.trim() !== "") {
        handleSubmit(e as any);
        setShowSuggestions(false);
      }
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex === null || prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex === null || prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1
      );
    }
  };

  const combinedSuggestions = querySearch.trim() ? suggestions : history;

  return (
    <>
      {show && (
        <form onSubmit={handleSubmit} className="w-full mx-auto flex justify-center">
          <div className="relative w-full max-w-xl flex items-center">
            <Popover opened={showSuggestions} onClose={() => setShowSuggestions(false)}>
              <Popover.Target>
                <div className="relative w-full">
                  <input
                    type="search"
                    value={querySearch}
                    onFocus={handleInputFocus}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    className="block w-full pl-12 pr-16 py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search for a title..."
                    required
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white rounded-lg px-4 py-2">
                    Search
                  </button>
                </div>
              </Popover.Target>
              <Popover.Dropdown className="min-w-96 w-full absolute bg-white border mt-1 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                {loading && (
                  <div className="p-2 text-sm text-gray-500 animate-pulse">Loading...</div>
                )}
                {!loading && combinedSuggestions.length > 0 && (
                  <ul className="w-full" dir="rtl">
                    {combinedSuggestions.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectSuggestion(item)}
                        className={`cursor-pointer p-2 hover:bg-blue-100 transition-colors rounded-md ${
                          selectedIndex === index ? "bg-blue-100" : ""
                        }`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Popover.Dropdown>
            </Popover>
          </div>
        </form>
      )}
    </>
  );
}
