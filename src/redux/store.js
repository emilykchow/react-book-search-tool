// import { configureStore } from '@reduxjs/toolkit'
// import { booksSlice } from './booksReducer';

// export const store = configureStore({
//   reducer: {
//       books: booksReducer;
//   },
// })


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})