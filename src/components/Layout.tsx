import BooksContainer from "@/components/BooksContainer";
import styles from "./Layout.module.css";
import BookInfoCard from "@/components/BookInfoCard";

const Layout = () => {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.layoutLeft}>
                    <BookInfoCard/>
                </div>
                <div className={styles.layoutRight}>
                    <BooksContainer/>
                </div>
            </div>
        </>
    )
}

export default Layout;