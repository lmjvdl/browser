import React from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import fetchWithError from "../../../utils/dataFetching/fetchWithError";
import AllUrls from "../../../utils/API/URLs";
import { useNavigate } from "react-router-dom";

interface ReportInputs {
  username: string;
  password: string;
  email: string;
}

interface ReportOptions {
  username: string;
  password: string;
  email: string;
}

export type ReportQueryType = UseQueryResult<
  Awaited<ReturnType<typeof resultQueryStrategy>> | null,
  unknown
>;
export type SetVariablesType = React.Dispatch<
  React.SetStateAction<ReportInputs | null>
>;

export default function useSignUp() {
  const [variables, SetVariables] = React.useState<ReportInputs | null>(null);
  const navigate = useNavigate();
  const reportQuery = useQuery({
    enabled: !!variables,
    queryKey: ["LOGIN", "AUTH", "SIGN_IN"],
    queryFn: ({ signal }) =>
      variables && resultQueryStrategy(variables, { signal }),
    onSettled: () => SetVariables(null),
    onSuccess: (data) => {
        navigate("/search");
        if (data?.refined?.user?.id) {
          localStorage.setItem("userId", data.refined.user.id.toString());
          localStorage.setItem("username", data.refined.user.username)
        }
    },
    retry: 3,
    retryDelay: 0,
  });

  return { reportQuery, SetVariables };
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
    password: options.password,
    username: options.username,
    email: options.email
  };
  return refinedOptions;
}

function urlMaker(refinedOptions: ReportOptions) {
  const baseUrl = new URL(AllUrls.register);
  baseUrl.searchParams.append("username", refinedOptions.username);
  baseUrl.searchParams.append("password", refinedOptions.password);
  baseUrl.searchParams.append("email", refinedOptions.email);
  return baseUrl;
}

const user = z
  .object({
    id: z.number(),
    username: z.string(),
    email: z.string()
  })

const finallySchemeRes = z.object({
  user,
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
