import styles from "@/components/Card.module.css";
import {FC, MouseEventHandler, ReactNode} from "react";

type CardProps = {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLDivElement>,
    className?: string
}

const Card: FC<CardProps> = props => {
    return (
        <div
            onClick={props.onClick}
            className={props.className ?
                `${props.className} ${styles.card}` : `${styles.card}`}>
            {props.children}
        </div>
    )
}

export default Card;