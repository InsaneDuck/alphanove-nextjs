import {FC, MouseEventHandler, ReactNode} from "react";
import styles from "./BookCard.module.css"
import {Book} from "@/types/Book";
import Image from "next/image";

type BookCardProps = {
    children?: ReactNode,
    onClick?: MouseEventHandler<HTMLDivElement>,
    book: Book
};
const BookCard: FC<BookCardProps> = props => {
    return (
        <div onClick={props.onClick} className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                    {props.book.coverImage ? <Image src={props.book.coverImage} alt={"Book Image"}/> :
                        <div>Book Image</div>}
                </div>
                <p className={styles.cardText}>{props.book.title}</p>
                <button className={styles.addToCartButton}>Add to Basket</button>
            </div>
        </div>
    )
}

export default BookCard;