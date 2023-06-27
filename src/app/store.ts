import { basketReducer } from './reducers/basket.slice';
import { moviesFilterReducer } from './reducers/moviesFilter.slice';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api.service';

export const store = configureStore({
  reducer: {
    moviesFilterReducer,
    basketReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
