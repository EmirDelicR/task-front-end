import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageInStore } from 'store/slices/contextSlice';

interface Props {
  amount: number;
  page: number;
  amountPrePage?: number;
}

const usePagination = ({ amount, page, amountPrePage = 10 }: Props) => {
  const dispatch = useDispatch();
  const pageCount = Math.ceil(amount / amountPrePage);
  const lastIndex = page * amountPrePage;
  const firstIndex = lastIndex - amountPrePage;

  const changePage = (direction: boolean) => {
    if (direction) {
      if (page === pageCount) {
        return dispatch(setPageInStore(page));
      }
      return dispatch(setPageInStore(page + 1));
    }

    if (page === 1) {
      return dispatch(setPageInStore(page));
    }
    return dispatch(setPageInStore(page - 1));
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      dispatch(setPageInStore(pageCount));
    } else if (num < 1) {
      dispatch(setPageInStore(1));
    } else {
      dispatch(setPageInStore(num));
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstIndex,
    lastIndex,
    page
  };
};

export default usePagination;
