import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../utils";

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
    saveBook(book, "read"); // Pass the category "read" to saveBook function
  };

  const handleWishlist = () => {
    saveBook(book, "wishlist"); // Pass the category "wishlist" to saveBook function
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
              onClick={handleRead}
              className="btn btn-outline"
            >
              Read
            </button>
            <button onClick={handleWishlist} className="btn btn-accent">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
