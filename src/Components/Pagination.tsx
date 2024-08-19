import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const getPageNumbers = () => {
    const range = 2;
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Previous Page Button */}
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Previous
        </Link>
      )}

      {getPageNumbers().map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`px-4 py-2 ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          } rounded-lg hover:bg-blue-500 hover:text-white transition-colors`}
        >
          {page}
        </Link>
      ))}


      {currentPage < totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
