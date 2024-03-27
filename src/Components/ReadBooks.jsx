import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ListBookCard from "./ListBookCard";

const ReadBooks = () => {
  const [read, setRead] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks('readBooks');
    setRead(storedBooks);
  }, []);

  return (
    <div>
      {read.map((book) => (
        <ListBookCard book={book} key={book.bookId}></ListBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
