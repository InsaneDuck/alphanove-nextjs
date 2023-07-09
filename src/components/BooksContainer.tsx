import styles from "./BooksContainer.module.css"
import {useSelector} from "react-redux";
import BookCard from "@/components/BookCard";
import {Book} from "@/types/Book";
import {RootState} from "@/store/store";

const BooksContainer = () => {
    const books:Book[] = useSelector((state: RootState) => state.book.books);

    return (
        <div className={styles.cardContainer}>
            {books.map(book => <BookCard key={book.id} book={book}/>)}
        </div>
    )
}