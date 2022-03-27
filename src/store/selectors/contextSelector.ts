import { createSelector } from '@reduxjs/toolkit';
import { IState } from 'interfaces/storeInterface';

const selectSelf = (state: IState) => state.context;

export const selectIsApiKeySet = createSelector(selectSelf, (state) => state.data.isApiKeySet);
export const selectApiKey = createSelector(selectSelf, (state) => {
  return state.data.apiKey;
});
export const selectPage = createSelector(selectSelf, (state) => {
  return state.page;
});
