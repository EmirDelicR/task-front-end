import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import * as reactRouterDom from 'react-router-dom';

import * as validateHelpers from 'utils/validationHelpers';
import * as storageHelpers from 'utils/localStorageHelper';
import { API_KEY, PageRoutes } from 'constants/constants';

import Form from './Form';

jest.mock('react-router-dom');

describe('<Form/>', () => {
  const dispatchMock = jest.fn();
  const navigateMock = jest.fn();
  const validateInputSpy = jest.spyOn(validateHelpers, 'validateInput');
  const setStorageValueSpy = jest.spyOn(storageHelpers, 'setStorageValue');
  const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
  const useNavigateSpy = jest.spyOn(reactRouterDom, 'useNavigate');

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(dispatchMock);
    useNavigateSpy.mockReturnValue(navigateMock);
    validateInputSpy.mockReturnValue(false);
  });

  it('should render form', () => {
    render(<Form />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
    expect(form.classList.contains('form')).toBe(true);
    expect(form.querySelector('.form__error')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.queryByText('Set api key')).toBeInTheDocument();
  });

  it('should not show error if input is valid', () => {
    validateInputSpy.mockReturnValue(true);
    render(<Form />);

    const form = screen.getByTestId('form');
    const inputWrapper = screen.getByTestId('input');

    const input = inputWrapper.querySelector('.input__field')!;
    const errorSpan = form.querySelector('.form__error')!;

    fireEvent.change(input, { target: { value: 'abc' } });

    expect(errorSpan).not.toBeInTheDocument();
  });

  it('should call setStorageValue if input is valid and button is clicked', () => {
    validateInputSpy.mockReturnValue(true);
    render(<Form />);

    const form = screen.getByTestId('form');
    const inputWrapper = screen.getByTestId('input');

    const input = inputWrapper.querySelector('.input__field')!;
    const button = screen.queryByText('Set api key')!;

    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.click(button);

    expect(setStorageValueSpy).toBeCalledWith(API_KEY, 'abc');
    expect(dispatchMock).toBeCalledWith({
      payload: { apiKey: 'abc', isApiKeySet: true },
      type: 'context/setContext'
    });
    expect(navigateMock).toBeCalledWith(PageRoutes.ENCODING_PAGE);
  });
});
