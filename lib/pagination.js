
export function getPaginationPages(currentPage, totalPages) {
  const pages = [];

  if (totalPages <= 5) {
    // show all pages
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // always show first, last, current, and surrounding pages
    pages.push(1);

    if (currentPage > 3) pages.push('...');

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push('...');

    pages.push(totalPages);
  }

  return pages;
}