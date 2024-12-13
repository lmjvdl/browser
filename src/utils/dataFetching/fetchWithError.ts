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
    throw new Error("درخواست به سرور با مشکل مواجه شد.", {
      cause: "خطای سرور",
    });
  }
}

function addProperHeader(options: RequestInit) {
  const newOptions = options;
  return newOptions;
}
