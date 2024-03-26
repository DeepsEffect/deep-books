import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import BookCard from "../Components/BookCard";

const ReadBooks = () => {
  const [read, setRead] = useState([]);
  useEffect(() => { 
    const storedBooks = getBooks();
    setRead(storedBooks);
  }, []);
  
  return (
    <div>
      {read.map((book) => (
        <BookCard book={book} key={book.bookId}></BookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
