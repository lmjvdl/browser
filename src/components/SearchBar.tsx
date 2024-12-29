import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Popover } from "@mantine/core";
import useSuggestion from "./useSuggestion"; // استفاده از hook جدید
import { SetVariablesType } from "./useSearch";

interface InputCenterProps {
  setInputs: SetVariablesType;
  show: boolean;
}

export default function SearchBar({ setInputs, show }: InputCenterProps) {
  const [querySearch, setQuerySearch] = useState<string>(""); // وضعیت جستجو
  const [suggestions, setSuggestions] = useState<string[]>([]); // پیشنهادات
  const [loading, setLoading] = useState<boolean>(false); // وضعیت بارگذاری
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false); // وضعیت نمایش پیشنهادات
  const navigate = useNavigate();
  const { suggestionQuery, setVariables } = useSuggestion();

  // تایم دبیس برای جلوگیری از درخواست‌های سریع
  useEffect(() => {
    if (querySearch.trim() === "") {
      setSuggestions([]); // اگر جستجو خالی باشد، پیشنهادات را پاک می‌کنیم
      setShowSuggestions(false);
      return;
    }

    setLoading(true);
    setShowSuggestions(true); // باز نگه داشتن پیشنهادات تا زمانی که جستجو در حال انجام باشد

    // انجام درخواست به API پس از 500 میلی‌ثانیه توقف تایپ
    const timeoutId = setTimeout(() => {
      setVariables({ querySearch });
    }, 500);

    // پاک کردن تایم دبیس قبلی
    return () => clearTimeout(timeoutId);
  }, [querySearch, setVariables]);

  // دریافت داده‌ها از API
  useEffect(() => {
    if (suggestionQuery.data?.suggestions) {
      setSuggestions(suggestionQuery.data.suggestions);
      setLoading(false); // بارگذاری تمام شد
    }
  }, [suggestionQuery.data]);

  // مدیریت تغییر در فیلد جستجو
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
  };

  // انتخاب پیشنهاد از لیست
  const handleSelectSuggestion = (suggestion: string) => {
    setQuerySearch(suggestion);
    setShowSuggestions(false); // بستن پیشنهادات بعد از انتخاب
  };

  // ارسال فرم جستجو
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputs({ querySearch, page: 1 });
    if (querySearch.trim() !== "") {
      navigate("/search");
    }
  };

  return (
    <>
      {show && (
        <form onSubmit={handleSubmit} className="w-full mx-auto flex justify-center">
          <label
            htmlFor="search-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full max-w-xl flex items-center">
            <Popover opened={showSuggestions} onClose={() => setShowSuggestions(false)}>
              <Popover.Target>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-input"
                    value={querySearch}
                    onChange={handleSearchChange}
                    className="block w-full pl-12 pr-16 py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300"
                    placeholder="Search for a title..."
                    required  
                    autoComplete="off" 
                    autoCorrect="off" 
                    spellCheck="false"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </Popover.Target>
              <Popover.Dropdown
                  className="min-w-96 w-full absolute bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50"
                >
                  {loading && querySearch.trim() && (
                    <div className="p-2 text-sm text-gray-500 animate-pulse">Loading...</div>
                  )}
                  {suggestions.length > 0 && !loading && querySearch.trim() && (
                    <ul dir="rtl" className="w-full">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelectSuggestion(suggestion)}
                          className="cursor-pointer p-2 hover:bg-blue-100 transition-colors duration-200 rounded-md"
                        >
                          {suggestion}
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
