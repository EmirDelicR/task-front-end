import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IContext, IContextData } from 'interfaces/contextInterface';

const initialState: IContext = {
  data: {
    isApiKeySet: false,
    apiKey: ''
  },
  page: 1
};

const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    setContext: (state: IContext, action: PayloadAction<IContextData>) => {
      state.data = action.payload;
    },
    setPageInStore: (state: IContext, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  }
});

const { setContext, setPageInStore } = contextSlice.actions;

export { setContext, setPageInStore };

export default contextSlice.reducer;
