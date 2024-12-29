import React from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import fetchWithError from "../utils/dataFetching/fetchWithError";
import AllUrls from "../utils/API/URLs";

interface SuggestionInputs {
  querySearch: string;
}

export type SuggestionQueryType = UseQueryResult<{ suggestions: string[] }, unknown>;

export default function useSuggestion() {
  const [variables, setVariables] = React.useState<SuggestionInputs | null>(null);

  const suggestionQuery = useQuery({
    queryKey: ["SUGGESTIONS", variables?.querySearch],
    enabled: !!variables?.querySearch,
    queryFn: async ({ signal }) => {
      if (!variables) throw new Error("No query provided");
      const url = new URL(AllUrls.suggestions);
      url.searchParams.append("query", variables.querySearch);

      const response = await fetchWithError(url.toString(), { signal });
      console.log(response)
      return suggestionSchema.parse(response);
    },
    retry: 3,
    retryDelay: 500,
    onSettled: () => setVariables(null),
  });

  return { suggestionQuery, setVariables };
}

const suggestionSchema = z.object({
  suggestions: z.array(z.string()),
});
