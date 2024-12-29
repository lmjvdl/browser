import { notifications } from "@mantine/notifications";

export default async function fetchWithError(
  url: string | URL,
  options: RequestInit = {}
) {
  try {
    const refinedOption = addProperHeader(options);
    const response = await window.fetch(url, refinedOption);
    if (!response.ok) {
      throw new Error("");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    notifications.show({
      title: "Error",
      message: "Request error",
      autoClose: 5_000,
      color: "red",
    });
  }
}

function addProperHeader(options: RequestInit) {
  const newOptions = options;
  return newOptions;
}
