import { useLoaderData, useParams } from "react-router-dom";
import { favoriteBooks, getBooks, readBooks, wishlistBooks } from "../utils";
import toast from "react-hot-toast";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { bookId } = useParams();
  const book = bookData.find((book) => book.bookId == bookId);
  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
  } = book;

  const handleRead = () => {
    readBooks(book);
  };

  const handleWishlist = () => {
    const readBooks = getBooks("readBooks");
    const isReadBooks = readBooks.find((b) => b.bookId === book.bookId);
    if (isReadBooks) {
      toast.error(
        "This book is already read. You cannot add it to the Wishlist"
      );
    } else {
      wishlistBooks(book);
    }
  };

  const handleAddToFavorite = () => {
    favoriteBooks(book);
  };

  return (
    <div className="hero bg-base-200 rounded-2xl mt-4">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-full rounded-lg shadow-2xl" />
        <div className="ml-12">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>by: {author}</p>
          <p>{category}</p>
          <div className="divider"></div>
          <p className="py-6">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="card-actions flex flex-col">
            <div className="flex gap-4 items-center">
              <span className="font-bold">Tags: </span>
              {tags.map((tag, idx) => (
                <div className="badge badge-outline badge-success" key={idx}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="divider"></div>
            <div>
              <p>
                <span>number of pages: </span>
                {totalPages}
              </p>
              <p>
                <span>Publisher: </span>
                {publisher}
              </p>
              <p>
                <span>Year Of Publishing: </span>
                {yearOfPublishing}
              </p>
              <p>
                <span>Rating: </span>
                {rating}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleRead(book)}
              className="btn btn-info text-white"
            >
              Read
            </button>
            <button
              onClick={() => handleWishlist(book)}
              className="btn btn-accent text-white"
            >
              Wishlist
            </button>
            <button
              onClick={() => handleAddToFavorite(book)}
              className="btn btn-error text-white"
            >
              Add To Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
