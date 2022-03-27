import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('<Input/>', () => {
  const onChangeHandler = jest.fn();

  it('should render Input', () => {
    render(<Input label="test" onChange={onChangeHandler} />);

    const inputWrapper = screen.getByTestId('input');

    expect(inputWrapper).toBeInTheDocument();
    expect(inputWrapper.classList.contains('input')).toBe(true);
    expect(inputWrapper.querySelector('.input__field')).toBeInTheDocument();
    expect(inputWrapper.querySelector('.input__text')).toBeInTheDocument();
  });

  it('should render button with default custom class', () => {
    render(<Input label="test" onChange={onChangeHandler} />);

    const inputWrapper = screen.getByTestId('input');
    const input = inputWrapper.querySelector('.input__field')!;

    fireEvent.change(input, { target: { value: 'abc' } });
    expect(onChangeHandler).toBeCalledTimes(1);
  });
});
