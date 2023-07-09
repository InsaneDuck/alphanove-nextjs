import {createSlice} from "@reduxjs/toolkit";
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
        getAllBooks(state) {
            if (state.books.length == 0) {
                //fetchBook().then()
            }

        },
        getBookById(state) {

        },
        searchBooks(state) {

        }
    }
})

const fetchBook = async (url: string): Promise<Book[]> => {
    let books: Book[] = [];



    return books;
}

export const {
    getAllBooks,
    searchBooks,
    getBookById
} = bookSlice.actions

export const bookReducer = bookSlice.reducer;