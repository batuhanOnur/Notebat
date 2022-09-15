import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authSlice } from '../features/api/authSlice'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authSlice.middleware),
  })
  setupListeners(store.dispatch)

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch