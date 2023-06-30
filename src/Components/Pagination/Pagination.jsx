import React from "react";
import "./pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className="pagination">
                {pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page == currentPage ? "active3" : ""}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
          
        </div>
    );
};

export default Pagination;
