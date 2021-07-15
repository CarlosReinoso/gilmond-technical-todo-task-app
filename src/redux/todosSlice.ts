import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Todo[]

const todoSlice = createSlice({
    name: "todo", // generated action types
    initialState,
    // state handling happens below
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.push(action.payload)
            },
            prepare: (todo: string) => ({
                payload: {
                    id: uuidv4(),
                    todo,
                    isComplete: false
                } as Todo,
            })
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.filter(item => item.todo !== action.payload)
        },
    },
})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer