import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import EventList from './EventList';
import './Pagination.css';
import previous from '../images/previous.svg';
import next from '../images/next.svg';

function Items({ currentItems }) {
  return (
    <>
      <EventList data={currentItems} />
    </>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<img src={next} alt="Previous" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={<img src={previous} alt="Previous" />}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active "
        previousClassName="pagination-previous general"
        nextClassName="pagination-next general"
        disabledClassName="pagination-disabled"
        pageClassName="pagination-item general"
      />
    </>
  );
}

export default PaginatedItems;
