import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import * as reactRedux from 'react-redux';

import usePagination from './usePagination';

describe('usePagination hook', () => {
  const dispatchMock = jest.fn();
  const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(dispatchMock);
  });

  it('should return default values', () => {
    const { result } = renderHook(() => usePagination({ amount: 10, page: 1 }));

    expect(result.current.totalPages).toBe(1);
    expect(result.current.firstIndex).toBe(0);
    expect(result.current.lastIndex).toBe(10);
    expect(result.current.page).toBe(1);
  });

  it('should increase total pages if amount pre page is changed', () => {
    const { result } = renderHook(() => usePagination({ amount: 10, page: 1, amountPrePage: 2 }));

    expect(result.current.totalPages).toBe(5);
  });

  it('should change index if page is passed', () => {
    const { result } = renderHook(() => usePagination({ amount: 30, page: 2 }));

    expect(result.current.firstIndex).toBe(10);
    expect(result.current.lastIndex).toBe(20);
  });

  it('should increase page number if nextPage is called', () => {
    const { result } = renderHook(() => usePagination({ amount: 30, page: 1 }));

    act(() => {
      result.current.nextPage();
    });

    expect(dispatchMock).toBeCalledWith({ payload: 2, type: 'context/setPageInStore' });
  });

  it('should not increase page number if nextPage is called and if amount fit only on one page', () => {
    const { result } = renderHook(() => usePagination({ amount: 10, page: 1 }));

    act(() => {
      result.current.nextPage();
    });

    expect(dispatchMock).toBeCalledWith({ payload: 1, type: 'context/setPageInStore' });
  });

  it('should decrease page number if prevPage is called', () => {
    const { result } = renderHook(() => usePagination({ amount: 30, page: 2 }));

    act(() => {
      result.current.prevPage();
    });

    expect(dispatchMock).toBeCalledWith({ payload: 1, type: 'context/setPageInStore' });
  });

  it('should not decrease page number if prevPage and is first page', () => {
    const { result } = renderHook(() => usePagination({ amount: 10, page: 1 }));

    act(() => {
      result.current.prevPage();
    });

    expect(dispatchMock).toBeCalledWith({ payload: 1, type: 'context/setPageInStore' });
  });

  it('should decrease page number if prevPage is called', () => {
    const { result } = renderHook(() => usePagination({ amount: 30, page: 2 }));

    act(() => {
      result.current.prevPage();
    });

    expect(dispatchMock).toBeCalledWith({ payload: 1, type: 'context/setPageInStore' });
  });

  it('should set page to 1 if amount is bigger the page count', () => {
    const { result } = renderHook(() => usePagination({ amount: 10, page: 1 }));

    act(() => {
      result.current.setPage(2);
    });

    expect(dispatchMock).toBeCalledWith({ payload: 1, type: 'context/setPageInStore' });
  });

  it('should set page to 1 if page index is 0', () => {
    const { result } = renderHook(() => usePagination({ amount: 10, page: 1 }));

    act(() => {
      result.current.setPage(0);
    });

    expect(dispatchMock).toBeCalledWith({ payload: 1, type: 'context/setPageInStore' });
  });

  it('should set page to passed page number', () => {
    const { result } = renderHook(() => usePagination({ amount: 30, page: 1 }));

    act(() => {
      result.current.setPage(2);
    });

    expect(dispatchMock).toBeCalledWith({ payload: 2, type: 'context/setPageInStore' });
  });
});
