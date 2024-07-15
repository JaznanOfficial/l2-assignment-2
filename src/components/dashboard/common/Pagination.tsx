// @ts-nocheck

"use client";

export default function PaginationPrimary({ count, setPage, page, size }) {
  const pages = Math.ceil(count / size);

  const pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  // //console.log(pagesArray);
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      {/*<!-- Component: Primary complex pagination --> */}
      <nav
        className="mt-8"
        role="navigation"
        aria-label="Pagination Navigation"
      >
        <ul className="flex list-none items-center justify-start text-sm text-slate-200 md:gap-1">
          {/* Previous arrow */}
          <li onClick={handlePrevious}>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 1"
              className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium dark:text-slate-200 text-black transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-04 desc-04"
              >
                <title id="title-04">Previous page</title>
                <desc id="desc-04">link to previous page</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </li>
          {pagesArray.map((item) => (
            <li
              onClick={() => setPage(item)}
              className={` h-10 items-center justify-center rounded text-black stroke-slate-700 px-4 text-sm font-medium dark:text-slate-200 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500  inline-flex cursor-pointer ${
                page === item
                  ? "bg-primary stroke-emerald-500 text-slate-200"
                  : ""
              }`}
              key={item}
            >
              {item}
            </li>
          ))}

          {/* <li>
            <span
              href="javascript:void(0)"
              className="pointer-events-none hidden h-10 items-center justify-center rounded px-4 text-sm font-medium text-slate-200 focus-visible:outline-none md:inline-flex"
            >
              ...
            </span>
          </li> */}
          {/* Next Arrow */}
          <li onClick={handleNext}>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 2"
              className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-black dark:text-slate-200 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-05 desc-05"
              >
                <title id="title-05">Next page</title>
                <desc id="desc-05">link to next page</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/*<!-- End Primary complex pagination --> */}
    </>
  );
}
