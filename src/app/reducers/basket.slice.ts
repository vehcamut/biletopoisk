'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasketState {
  counter: number;
  items: { [key: string]: number };
}

const initialState: IBasketState = { counter: 0, items: {}};
// localStorage?.basket;
// {
//   localStorage?.basket?.for
//   cinemaDropDown: undefined,
//   nameInput: undefined,
//   genreDropDown: undefined,
// };

export const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    changeBasket(state: IBasketState, action: PayloadAction<{id: string, count: number}>) {
      const amount = state.items[action.payload.id];
      if (!amount && action.payload.count > 0) {
        state.items[action.payload.id] = action.payload.count;
        state.counter += action.payload.count;
      }
      else {
        if (amount + action.payload.count < 0) {
          state.items[action.payload.id] = 0;
          state.counter -= amount;
        }
        else {
          state.items[action.payload.id] = amount + action.payload.count;
          state.counter += action.payload.count;
        }
      }
    },
    removeFromBasket(state: IBasketState, action: PayloadAction<{id: string}>) {
      state.counter -= state.items[action.payload.id];
      state.items[action.payload.id] = 0;
    }
  },
});

export const basketReducer = basketSlice.reducer;
