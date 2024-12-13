import { Pagination } from "@mantine/core";
import React, { useState, useEffect } from "react";
import useResultQuery, { ReportQueryType } from "../../components/useSearch";
import HeaderForSearchResult from "../../components/HeaderForSearchResult";

interface VisualizationProps {
  query: ReportQueryType;
}

export default function SearchResults({ query }: VisualizationProps) {
  const [activePage, setPage] = useState(query.data?.refined.page || 1);
  const { setVariables } = useResultQuery();

  useEffect(() => {
    if (query.data) {
      setPage(query.data.refined.page);
    }
  }, [query.data]);

  const handlePageChange = (page: number) => {
    setPage(page);
    setVariables({
      querySearch: query.data?.options.querySearch || "",
      page: page,
    });
  };

  return (
    <>
      <HeaderForSearchResult />
      <div className="flex justify-items-center items-center flex-col">
        <div>
          {/* <div className="text-3xl font-bold mb-4 mt-4 mx-auto flex justify-center items-center bg-slate-300 w-11/12 rounded-xl py-2">
            <h1 className="text-5xl text-orange-600 inline">S</h1>
            <h1 className="text-blue-950 inline">earch</h1>
            <h5 className="text-5xl text-orange-600 inline">R</h5>
            <h5 className="text-blue-950 inline">esult</h5>
          </div> */}
          <div className="mb-4 mt-4 mx-auto flex justify-center items-center w-11/12">
            <ul>
              {query.data?.refined?.results.map((result) => (
                <li
                  key={result.title}
                  className=" bg-slate-300 mb-2 p-8 rounded-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 10 48 35"
                      className="inline">
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <span className="text-2xl ml-3 text-gray-800">
                      {result.title}
                    </span>
                  </div>
                  <a
                    href={result.url}
                    className="text-blue-800 hover:underline block">
                    {truncateUrl(result.url)}
                  </a>
                  <p
                    dir="rtl"
                    className="text-gray-900 inline"
                    dangerouslySetInnerHTML={{
                      __html: processStrongTags(result.body),
                    }}></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Pagination
            total={query.data?.refined?.total || 0}
            value={activePage}
            onChange={handlePageChange}
            className="justify-center content-center flex my-10"
          />
        </div>
      </div>
    </>
  );
}

function processStrongTags(text: string): string {
  return text.replace(
    /<strong>(.*?)<\/strong>/g,
    '<span class="font-bold">$1</span>'
  );
}

function truncateUrl(url: string): string {
  const maxLength = 50;
  return url.length > maxLength ? `${url.slice(0, maxLength)}...` : url;
}
