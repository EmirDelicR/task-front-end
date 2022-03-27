import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setContext } from 'store/slices/contextSlice';
import { setStorageValue } from 'utils/localStorageHelper';
import { validateInput } from 'utils/validationHelpers';
import { API_KEY, PageRoutes } from 'constants/constants';

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

import './Form.scss';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
    const isInputValid = validateInput(value);
    setIsValid(isInputValid);
  };

  const setApiKey = () => {
    setStorageValue(API_KEY, inputValue);
    dispatch(setContext({ isApiKeySet: true, apiKey: inputValue }));
    navigate(PageRoutes.ENCODING_PAGE);
  };
  return (
    <div className="form" data-testid="form">
      <Input label="Api key" onChange={handleChange} />
      {!isValid && <span className="form__error">API key is not valid</span>}
      <Button onClickHandler={setApiKey} isDisabled={!isValid}>
        Set api key
      </Button>
    </div>
  );
}

export default Form;
