import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { registerSlice } from '../features/api/registerSlice'

export const store = configureStore({
    reducer: {
      [registerSlice.reducerPath]: registerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(registerSlice.middleware),
  })
  setupListeners(store.dispatch)