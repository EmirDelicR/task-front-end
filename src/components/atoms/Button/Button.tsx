import React from 'react';

import { ButtonClassType, ButtonType, ButtonSize } from 'constants/constants';

import './Button.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  classType?: ButtonClassType;
  onClickHandler?: () => void;
  size?: ButtonSize;
  type?: ButtonType;
  isDisabled?: boolean;
}

function Button({
  className = '',
  onClickHandler,
  classType = ButtonClassType.PRIMARY,
  size = ButtonSize.NORMAL,
  type = ButtonType.BUTTON,
  children,
  isDisabled = false
}: Props) {
  const elementClass = `button ${className} button--${classType} button--${size}`;

  return (
    <button
      data-testid="button"
      type={type}
      className={elementClass}
      onClick={onClickHandler}
      disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
