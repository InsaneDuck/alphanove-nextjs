import styles from "./BooksContainer.module.css"
import {useDispatch, useSelector} from "react-redux";
import BookCard from "@/components/BookCard";
import {Book} from "@/types/Book";
import {RootState} from "@/store/store";
import {useEffect} from "react";
import {BookEndpoints} from "@/store/api-endpoints";
import {setAllBooks} from "@/store/book-slice";


let initial = true;

const BooksContainer = () => {
    // const [books, setBooks] = useState<Book[]>([]);
    //

    const books: Book[] = useSelector((state: RootState) => state.book.books);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(BookEndpoints.GET_BOOKS, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(data => dispatch(setAllBooks(data._embedded.books)));
    }, [dispatch])


    return (
        <div className={styles.cardContainer}>
            {books.map(book => <BookCard key={book.isbn} book={book}/>)}
        </div>
    )
}

export default BooksContainer;