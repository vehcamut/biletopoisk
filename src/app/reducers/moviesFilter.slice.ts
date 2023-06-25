import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMoviesFilterState {
  cinemaDropDown?: { label: string, value: string };
  nameInput?: string;
  genreDropDown?: { label: string, value: string };
}

const initialState: IMoviesFilterState = {
  cinemaDropDown: undefined,
  nameInput: undefined,
  genreDropDown: undefined,
};

export const moviesFilterSlice = createSlice({
  name: 'moviesFilterSlice',
  initialState,
  reducers: {
    setCinemaDropDown(state: IMoviesFilterState, action: PayloadAction<{ label: string, value: string } | undefined>) {
      state.cinemaDropDown = action.payload;
    },
    setNameInput(state: IMoviesFilterState, action: PayloadAction<string>) {
      state.nameInput = action.payload;
    },
    setGenreDropDown(state: IMoviesFilterState, action: PayloadAction<{ label: string, value: string } | undefined>) {
      state.genreDropDown = action.payload;
    },
  },
});

export const moviesFilterReducer = moviesFilterSlice.reducer;
