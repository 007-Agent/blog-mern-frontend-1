import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
const initialState = {
  data: null,
  status: 'loading',
};

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = 'loading';
      state.data = null; // если сейчас пришел запрос panding, то обнровляем статус на загрузку(landing)
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload; // то запрос выполнился, данные загрузились!
    },
    [fetchAuth.rejected]: (state) => {
      state.status = 'loaded';
      state.data = null; // ошибка загрузки, сбрасы
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export default authSlice.reducer;
