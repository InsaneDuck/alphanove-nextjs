import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Book} from "@/types/Book";

export type BookState = {
    book: Book | undefined,
    books: Book[],
    searchResult: Book[]
}

const initialState: BookState = {
    book: undefined,
    books: [],
    searchResult: [],
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getAllBooks() {

        },
        setAllBooks(state, action: PayloadAction<Book[]>) {
            state.books.push(...action.payload)
        },
        getBookById(state, action: PayloadAction<Book>) {
            state.book = action.payload
        },
        searchBooks(state) {

        }
    }
})


export const bookActions = bookSlice.actions

export const bookReducer = bookSlice.reducer;