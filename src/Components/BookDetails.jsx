import { useLoaderData, useParams } from "react-router-dom";
import { favoriteBooks, getBooks, readBooks, wishlistBooks } from "../utils";
import toast from "react-hot-toast";
import { FaReadme } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

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
    <div className="hero lg:bg-base-200 lg:rounded-2xl mt-4">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-full rounded-lg shadow-2xl" />
        <div className="lg:ml-12">
          <h1 className=" text-2xl lg:text-5xl font-bold">{bookName}</h1>
          <p className="font-semibold">by: {author}</p>
          <div className="divider m-0"></div>
          <p className="font-medium">{category}</p>
          <div className="divider m-0"></div>
          <p className="py-6">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="card-actions flex flex-col">
            <div className="flex gap-4 items-center">
              <span className="font-bold">Tags: </span>
              {tags.map((tag, idx) => (
                <div className="badge badge-outline badge-success font-semibold" key={idx}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="divider"></div>
            <div className="w-full lg:w-80">
              <p className="flex justify-between">
                <span>number of pages: </span>
                <span className="font-semibold ">{totalPages}</span>
              </p>
              <p className="flex justify-between">
                <span>Publisher: </span>
                <span className="font-semibold ">{publisher}</span>
              </p>
              <p className="flex justify-between">
                <span>Year Of Publishing: </span>
                <span className="font-semibold ">{yearOfPublishing}</span>
              </p>
              <p className="flex justify-between">
                <span>Rating: </span>
                <span className="font-semibold">{rating}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <button
              onClick={() => handleRead(book)}
              className="btn btn-info text-white"
            >
              <FaReadme className="text-xl"/>Read
            </button>
            <button
              onClick={() => handleWishlist(book)}
              className="btn btn-accent text-white"
            >
              <FaClipboardList className="text-xl" />Wishlist
            </button>
            <button
              onClick={() => handleAddToFavorite(book)}
              className="btn btn-error text-white"
            >
              <MdOutlineFavorite className="text-xl"/> To Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
