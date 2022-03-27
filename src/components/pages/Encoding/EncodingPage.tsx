import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { PageRoutes } from 'constants/constants';

import Button from 'components/atoms/Button/Button';
import NavBar from 'components/molecules/NavBar/NavBar';
import Pagination from 'components/organisms/Pagination';
import { fetchEncodesData } from 'store/slices/encodesSlice';

import './EncodingPage.scss';
import {
  selectEncodesData,
  selectIsLoading,
  selectEncodesError
} from 'store/selectors/encodesSelectors';
import Loader from 'components/atoms/Loader/Loader';
import { selectApiKey } from 'store/selectors/contextSelector';
import { setPageInStore } from 'store/slices/contextSlice';

function EncodingPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectEncodesError);
  const encodesData = useSelector(selectEncodesData);
  const apiKey = useSelector(selectApiKey);

  const fetchData = () => {
    dispatch(fetchEncodesData({ apiKey }));
    dispatch(setPageInStore(1));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="encoding-page">
      <NavBar />
      {error?.message && <div className="encoding-page__error">{error?.message}</div>}
      {encodesData?.items?.length > 0 && <Pagination data={encodesData} />}
      <Button onClickHandler={fetchData}>Fetch Data</Button>
    </div>
  );
}

export default EncodingPage;
