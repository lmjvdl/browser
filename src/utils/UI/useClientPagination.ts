import React from "react";

export default function useClientPagination<T>(
  allRecords: T[],
  { recordCount = 10 } = {}
) {
  const [pageNumber, setPageNumber] = React.useState(1);

  const totalPages = Math.ceil(allRecords.length / recordCount);
  const thisPageRecords = allRecords.slice(
    recordCount * (pageNumber - 1),
    recordCount * pageNumber
  );
  const hasNextPage = pageNumber < totalPages;
  const hasPerviousPage = pageNumber > 1;
  const isPageInBound = isInBound(pageNumber);

  if (!isPageInBound && totalPages > 0) {
    setPageNumber(1);
  }

  function setPage(newPageNumber: number) {
    if (!isInBound(newPageNumber)) {
      setPageNumber(1);
      return;
    }
    setPageNumber(newPageNumber);
  }

  function next() {
    if (hasNextPage) {
      setPageNumber(pageNumber + 1);
    }
  }

  function previous() {
    if (hasPerviousPage) {
      setPageNumber(pageNumber - 1);
    }
  }

  function last() {
    setPageNumber(totalPages);
  }

  function first() {
    setPageNumber(1);
  }

  function isInBound(number: number) {
    return Number.isFinite(number) && number <= totalPages && number >= 1;
  }
  const finalAnswer = {
    allRecords,
    thisPageRecords,
    totalPages,
    pageNumber,
    isPageInBound,
    hasNextPage,
    hasPerviousPage,
    setPage,
    next,
    previous,
    last,
    first,
  };
  return finalAnswer;
}
