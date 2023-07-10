import {Book} from "@/types/Book";
import {BookEndpoints} from "@/store/api-endpoints";
import {setAllBooks} from "@/store/book-slice";

export const getAllBooks = () => {
    return async (dispatch:any) => {
        const get = async () => {
            const headers: HeadersInit = {
                'Content-Type': 'application/json',
            };
            const response = await fetch(BookEndpoints.GET_BOOKS, {headers});
            if (!response.ok) {
                throw new Error("fetch failed")
            }
            const responseJson = await response.json();
            console.log(responseJson)
            return  responseJson._embedded.books
        }
        try{
            let books: Book[] = await get();
            dispatch(setAllBooks(books))
        }
        catch (error)
        {
            console.log(error)
        }

    };
}