import {createSlice} from "@reduxjs/toolkit";
import {Book} from "@/types/Book";

export type FormState = {
    book: Book | undefined
}

const initialState: FormState = {
    book: undefined
}

export const formSlice = createSlice({
        name: 'form',
        initialState,
        reducers: {
            submitForm(state) {

            }
        }
    }
)


export const {
    submitForm
} = formSlice.actions;
export const formReducer = formSlice.reducer;