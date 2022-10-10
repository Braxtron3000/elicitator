import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.js';
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
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.value = [...state.value, action.payload];
    },
    deleteAllQuestions: state => {
      state.value = [];
    },
  },
});

export const {addQuestion, deleteAllQuestions} = QuestionListSlice.actions;
export const selectQuestionList = (state: RootState) => state.questions.value;
export default QuestionListSlice.reducer;
