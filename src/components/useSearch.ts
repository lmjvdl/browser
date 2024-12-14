import React from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import fetchWithError from "../utils/dataFetching/fetchWithError";
import AllUrls from "../utils/API/URLs";

interface ReportInputs {
  querySearch: string;
  page: number;
}

interface ReportOptions {
  querySearch: string;
  page: number;
}

export type ReportQueryType = UseQueryResult<
  Awaited<ReturnType<typeof resultQueryStrategy>> | null,
  unknown
>;
export type SetVariablesType = React.Dispatch<
  React.SetStateAction<ReportInputs | null>
>;

export default function useResultQuery() {
  const [variables, setVariables] = React.useState<ReportInputs | null>(null);
  const reportQuery = useQuery({
    enabled: !!variables,
    queryKey: ["SEARCH", "QUERY"],
    queryFn: ({ signal }) =>
      variables && resultQueryStrategy(variables, { signal }),
    onSettled: () => setVariables(null),
    retry: 3,
    retryDelay: 0,
  });

  return { reportQuery, setVariables };
}

async function resultQueryStrategy(inputs: ReportInputs, options: RequestInit) {
  const refinedOptions = preprocessor(inputs);
  const urlToRequest = urlMaker(refinedOptions);
  const rawData = await fetchWithError(urlToRequest, options);
  const refinedData = sanitizer(rawData);

  return { refined: refinedData, options: refinedOptions };
}

function preprocessor(options: ReportInputs) {
  const refinedOptions = {
    querySearch: options.querySearch,
    page: options.page,
  };
  return refinedOptions;
}

function urlMaker(refinedOptions: ReportOptions) {
  const baseUrl = new URL(AllUrls.search);
  baseUrl.searchParams.append("query", refinedOptions.querySearch);
  baseUrl.searchParams.append("page", refinedOptions.page.toString());
  return baseUrl;
}

const results = z
  .object({
    id: z.string(),
    url: z.string(),
    title: z.string(),
    body: z.string(),
  })
  .array();

const finallySchemeRes = z.object({
  results,
  total: z.number(),
  page: z.number(),
  size: z.number(),
});

function sanitizer(rawData: unknown) {
  try {
    const refinedData = finallySchemeRes.parse(rawData);
    return refinedData;
  } catch (err) {
    throw new Error("متاسفانه داده دریافتی ناقص است لطفا دوباره تلاش نمایید.", {
      cause: "خطای سرور",
    });
  }
}
