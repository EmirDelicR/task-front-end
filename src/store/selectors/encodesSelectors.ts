import { createSelector } from '@reduxjs/toolkit';
import { IState } from 'interfaces/storeInterface';

const selectSelf = (state: IState) => state.encodes;

export const selectEncodesData = createSelector(selectSelf, (state) => state.data);
export const selectEncodesItems = createSelector(selectSelf, (state) => state.data.items);
export const selectEncodesError = createSelector(selectSelf, (state) => state.error);
export const selectIsLoading = createSelector(selectSelf, (state) => state.isLoading);
