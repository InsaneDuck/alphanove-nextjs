const BASE_URL = "http://localhost:8080/";
const SEARCH_URL = BASE_URL+`books/search/`;


export const BookEndpoints = {
    GET_BOOKS : BASE_URL + `books`,
    POST_BOOK : BASE_URL + "books",
    GET_BOOK : (id: number) => BASE_URL + `books/${id}`,
    PUT_BOOK : (id: number) => BASE_URL + `books/${id}`,
    DELETE_BOOK : (id: number) => BASE_URL + `books/${id}`,
    PATCH_BOOK : (id: number) => BASE_URL + `books/${id}`,
    BY_ISBN : (isbn:string) => SEARCH_URL + `findBookByIsbn?isbn=${isbn}`,
    BY_AUTHOR: (author:string) => SEARCH_URL+`findBooksByAuthor?author=${author}`,
    BY_AUTHOR_CONTAINS: (author: string) => SEARCH_URL+`findBooksByAuthorContains?author=${author}`,

}