import React from 'react';

type PaginationControlsProps = {
  currentPage: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  total,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  if (totalPages <= 1) {
    return null;
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="flex items-center justify-between rounded-full border border-white/12 bg-[#080808] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60 sm:px-6">
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="rounded-full px-4 py-2 transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:text-white"
      >
        Previous
      </button>
      <span className="text-[11px] text-white/45">
        Page {currentPage} of {totalPages}
      </span>
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="rounded-full px-4 py-2 transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:text-white"
      >
        Next
      </button>
    </nav>
  );
};

export default PaginationControls;
