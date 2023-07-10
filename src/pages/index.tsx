import { Inter } from 'next/font/google'
import BooksContainer from "@/components/BooksContainer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <BooksContainer/>
    </>
  )
}
