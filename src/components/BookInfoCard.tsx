import {FC} from "react";
import Card from "@/components/Card";
import styles from "./BookInfoCard.module.css"
import {Book} from "@/types/Book";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

type BookInfoCardProps = {}
const BookInfoCard: FC<BookInfoCardProps> = props => {
    let book: Book | undefined = useSelector((state: RootState) => state.book.book)

    return (
        <Card className={styles.cardStyle}>
            <p>ID: {book?.id}</p>
            <p>Title: {book?.title}</p>
            <p>Author: {book?.author}</p>
            <p>ISBN: {book?.isbn}</p>
            <p>Available: {book?.availability}</p>
            <p>Edition: {book?.edition}</p>
            <p>Genre: {book?.genre}</p>
            <p>Language: {book?.language}</p>
            <p>PageCount: {book?.pageCount}</p>
            <p>Description: {book?.description}</p>
            <p>Price: {book?.price}</p>
            <p>Publisher: {book?.publisher}</p>
            <p>Publication Year: {book?.publicationYear}</p>
            <p>Rating: {book?.rating}</p>
            <p>Series: {book?.series}</p>
        </Card>
    )
}

export default BookInfoCard;