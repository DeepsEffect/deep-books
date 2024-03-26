import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import BookCard from "../Components/BookCard";

const WishlistBooks = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setWishlist(storedBooks);
  }, []);

  return (
    <div>
      {wishlist.map((book) => (
        <BookCard book={book} key={book.bookId}></BookCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
