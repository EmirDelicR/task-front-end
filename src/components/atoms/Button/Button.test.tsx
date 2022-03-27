import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ButtonClassType, ButtonSize } from 'constants/constants';

import Button from './Button';

describe('<Button/>', () => {
  it('should render button with default classes', () => {
    render(<Button>Test</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button.classList.contains('button')).toBe(true);
    expect(button.classList.contains('button--primary')).toBe(true);
    expect(button.classList.contains('button--normal')).toBe(true);
  });

  it('should render button with default custom class', () => {
    render(<Button className="test">Test</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button.classList.contains('test')).toBe(true);
  });

  it('should render button with type class secondary', () => {
    render(<Button classType={ButtonClassType.SECONDARY}>Test</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button.classList.contains('button--secondary')).toBe(true);
  });

  it('should render button with custom size', () => {
    render(<Button size={ButtonSize.BIG}>Test</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button.classList.contains('button--big')).toBe(true);
  });

  it('should call custom function on click', () => {
    const customHandler = jest.fn();
    render(<Button onClickHandler={customHandler}>Test</Button>);

    const button = screen.getByTestId('button');

    fireEvent.click(button);

    expect(customHandler).toBeCalledTimes(1);
  });
});
