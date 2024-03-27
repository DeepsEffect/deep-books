import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ListBookCard from "./ListBookCard";

const WishlistBooks = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks('wishlistBooks');
    setWishlist(storedBooks);
  }, []);

  return (
    <div>
      {wishlist.map((book) => (
        <ListBookCard book={book} key={book.bookId}></ListBookCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
