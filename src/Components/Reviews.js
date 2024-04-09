import React, { useState } from 'react';
import { reviewsData } from './data';
import ReviewCard from './ReviewCard';

const Reviews = ({ selectedProfession }) => {
  const reviewsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Filter reviews based on selected profession
  const filteredReviews = selectedProfession === "ALL" ? reviewsData.users : reviewsData.users.filter(review => review.profession === selectedProfession);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  // Calculate index of the first and last reviews to be displayed on the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  // Function to handle pagination navigation
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>
      {currentReviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1} 
          className={`mx-1 my-8 px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}`}
        >
          &lt; 
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            onClick={() => paginate(i + 1)} 
            className={`mx-1 my-8 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-gray-200' : 'bg-gray-100'}`}
          >
            {i + 1}
          </button>
        ))}
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className={`mx-1 my-8 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}`}
        >
         &gt;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
