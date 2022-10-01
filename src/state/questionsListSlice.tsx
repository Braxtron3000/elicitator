import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Question} from '../../types.js';

interface QuestionListState {
  value: Question[];
}

const initialState: QuestionListState = {
  value: [],
};

export const QuestionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const {addQuestion} = QuestionListSlice.actions;

export default QuestionListSlice.reducer;
