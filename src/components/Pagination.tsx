import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../context/GlobalStateContext";

export const Pagination = ({ resultsPerPage, onPageChange }: { resultsPerPage: number; onPageChange: (start: number, end: number) => void }) => {
    const { searchResults } = useContext(GlobalStateContext);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = searchResults.length > 0 ? Math.ceil(searchResults.length / resultsPerPage) : 1;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchResults]);

    useEffect(() => {
        const start = (currentPage - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        onPageChange(start, end);
    }, [currentPage]);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div>
            {currentPage > 1 && (
                <button onClick={handlePrevious}>
                    Previous
                </button>
            )}
            <span>
                Page {currentPage} / {totalPages}
            </span>
            {currentPage < totalPages && (
                <button onClick={handleNext}>
                    Next
                </button>
            )}
        </div>
    );
};
