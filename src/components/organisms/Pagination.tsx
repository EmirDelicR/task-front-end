import React from 'react';
import usePagination from 'hooks/usePagination';

import { IEncodesData, IEncodesItem } from 'interfaces/encodesInterface';

import Button from 'components/atoms/Button/Button';

import './Pagination.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectApiKey, selectPage } from 'store/selectors/contextSelector';
import { fetchEncodesData } from 'store/slices/encodesSlice';

interface Props {
  data: IEncodesData;
}

function Pagination({ data }: Props) {
  const apiKey = useSelector(selectApiKey);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { items, next, previous, totalCount } = data;
  const fetchedItemsNumber = Math.ceil(items.length / 10);
  const { firstIndex, lastIndex, nextPage, prevPage, setPage, totalPages } = usePagination({
    amount: totalCount,
    page
  });

  const fetchData = (url: string, isNextPage = false) => {
    dispatch(fetchEncodesData({ apiKey, url }));
    if (isNextPage) {
      nextPage();
    } else {
      prevPage();
    }
  };

  const renderItems = () => {
    return items.slice(firstIndex, lastIndex).map((item: IEncodesItem) => (
      <div className="item" key={item.id}>
        {item.name}
      </div>
    ));
  };

  const renderPagesPagination = () => {
    const array = Array.from({ length: totalPages }, (x, i) => i);
    return array.map((index) => (
      <button
        onClick={() => setPage(index + 1)}
        key={index}
        className={`pagination__page ${page === index + 1 ? 'active' : ''} ${
          index + 1 > fetchedItemsNumber && 'disabled'
        }`}>
        {index + 1}
      </button>
    ));
  };

  return (
    <div className="pagination-wrapper">
      <div className="items">{renderItems()}</div>
      <div className="pagination">
        <Button
          onClickHandler={() => fetchData(previous)}
          className={`pagination__page ${page === 1 && 'disabled'}`}>
          &larr;
        </Button>
        {renderPagesPagination()}
        <Button
          onClickHandler={() => fetchData(next, true)}
          className={`pagination__page ${page === totalPages && 'disabled'}`}>
          &rarr;
        </Button>
      </div>
      <div className="pagination__count">
        {page}/{totalPages}
      </div>
    </div>
  );
}

export default Pagination;
