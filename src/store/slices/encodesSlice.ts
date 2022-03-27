import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { IApiRequest, IEncodes } from 'interfaces/encodesInterface';
import encodingsServices from 'services/encodings';
import { HTTP_CODE } from 'constants/api';

const initialState: IEncodes = {
  data: {
    totalCount: 0,
    next: '',
    previous: '',
    items: []
  },
  error: {
    message: '',
    code: 0,
    isError: false
  },
  isLoading: false
};

const fetchEncodesData = createAsyncThunk('encodes/fetchData', async (data: IApiRequest) => {
  try {
    const response = await encodingsServices.fetchEncodings(data);
    return response;
  } catch (error: any) {
    return isRejectedWithValue(error?.response?.data);
  }
});

const encodesSlice = createSlice({
  name: 'encodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEncodesData.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchEncodesData.fulfilled, (state, { payload }) => {
        if (payload?.message) {
          state.error = {
            isError: true,
            code: HTTP_CODE.CODE_403,
            message: payload.message
          };
        } else {
          state.data = {
            ...state.data,
            ...payload.data.result,
            items: [...state.data.items, ...payload.data.result.items]
          };
          state.error = {
            isError: false,
            code: 0,
            message: ''
          };
        }
        state.isLoading = false;
      })
      .addCase(fetchEncodesData.rejected, (state, { payload }) => {
        state.error = {
          isError: true,
          code: HTTP_CODE.CODE_500,
          message: 'Something went wrong!'
        };
        state.isLoading = false;
      });
  }
});

export { fetchEncodesData };
export default encodesSlice.reducer;
