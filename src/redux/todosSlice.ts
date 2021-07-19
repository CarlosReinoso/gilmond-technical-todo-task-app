import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: 'todo', //  generated action types
  initialState,
  //  state handling happens below
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (todo: string) => ({
        payload: {
          id: uuidv4(),
          todo,
          isComplete: false,
        } as Todo,
      }),
    },
    deleteTodo(state, action: PayloadAction<string>) {
      //  createReducer(). You need to ensure that you either mutate the state argument or return a new state, but not both.
      return state.filter((item) => item.id !== action.payload);
    },
    editTodo(state, { payload }: PayloadAction<Todo>) {
      //  state.find((item) => item.id === payload.id ? (item.todo = payload.todo) : item);
      const index = state.findIndex((item) => (item.id === payload.id));
      if (index !== -1) {
        state[index].todo = payload.todo;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
