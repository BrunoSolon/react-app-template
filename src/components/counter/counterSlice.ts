import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootStateType } from '@src/app/store';

interface CounterState {
  value: number;
  name: string;
}

const initialState: CounterState = {
  value: 0,
  name: 'Counter',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync =
  (amount: number): AppThunk =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };

export const selectCount = (state: RootStateType) => state.counter.value;
export const selectName = (state: RootStateType) => state.counter.name;

export default counterSlice.reducer;
