import { configureStore } from '@reduxjs/toolkit';
import posts from './slices/posts';
import auth from './slices/Auth';
export const store = configureStore({
  // хранилище Redux
  reducer: {
    posts,
    auth,
  },
});
