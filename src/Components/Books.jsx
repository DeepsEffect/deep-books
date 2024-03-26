import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
  const books = useLoaderData();
  return (
    <section className="mt-6">
      <h2 className="font-playfair text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
