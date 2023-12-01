interface PaginationProps {
  page: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  return (
    <>
      <div className="flex justify-center items-center py-4 px-2 gap-3">
        {page <= 1 ? null : (
          <button
            onClick={handlePrevPage}
            className="bg-black rounded-md px-2 font-semibold text-white transition-all hover:text-red-500"
          >
            Prev
          </button>
        )}
        <p>
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null : (
          <button
            onClick={handleNextPage}
            className="bg-black rounded-md px-2 font-semibold text-white transition-all hover:text-red-500"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
