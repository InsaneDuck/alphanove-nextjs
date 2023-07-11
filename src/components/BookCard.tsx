import {FC, ReactNode} from "react";
import styles from "./BookCard.module.css"
import {Book} from "@/types/Book";
import Image from "next/image";
import Card from "@/components/Card";
import {useDispatch} from "react-redux";
import {bookActions} from "@/store/book-slice";

type BookCardProps = {
    children?: ReactNode,
    book: Book
};
const BookCard: FC<BookCardProps> = props => {
    const dispatch = useDispatch();
    const selectedBookHandler = () => {
        dispatch(bookActions.getBookById(props.book))
    }

    return (
        <Card onClick={selectedBookHandler}>
            <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                    {props.book.coverImage ?
                        <Image src={props.book.coverImage} width={`${50}`} height={`${50}`} alt={"Book Image"}/> :
                        <div>Book Image</div>}
                </div>
                <p className={styles.cardText}>{props.book.title}</p>
                <button className={styles.addToCartButton}>Add to Basket</button>
            </div>
        </Card>
    )
}

export default BookCard;