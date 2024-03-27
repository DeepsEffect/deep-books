import { useEffect, useState } from "react";
import ListBookCard from "../Components/ListBookCard";
import { getBooks } from "../utils";

/* eslint-disable react/prop-types */
const FavoriteBooks = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks("favoriteBooks");
    setFavorites(storedBooks);
  }, []);
  return (
    <div>
      {favorites.map((book) => (
        <ListBookCard book={book} key={book.bookId}></ListBookCard>
      ))}
    </div>
  );
};

export default FavoriteBooks;
