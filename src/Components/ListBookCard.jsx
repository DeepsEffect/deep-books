import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { VscSaveAll } from "react-icons/vsc";
/* eslint-disable react/prop-types */
const ListBookCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    bookId,
  } = book;

  return (
    <div className="hero bg-base-100 border p-4 lg:p-8 mt-10 rounded-2xl">
      <div className="flex-row lg:flex w-full md:gap-6 lg:gap-10 items-center">
        <figure className="flex justify-center">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </figure>
        <div className="w-full space-y-4">
          <h1 className="text-2xl font-bold font-playfair flex-grow">
            {bookName}
          </h1>
          <p className="font-medium">
            <span>By: </span>
            {author}
          </p>
          <div className="card-actions mt-2">
            {tags.map((tag, idx) => (
              <div className="badge badge-outline badge-success font-medium" key={idx}>
                #{tag}
              </div>
            ))}
            <p className="flex items-center gap-1 font-medium mt-4 lg:mt-0 lg:ml-6"><TfiLocationPin className="text-xl"/>Year Of Publishing: {yearOfPublishing}</p>
          </div>
          <div className="flex gap-2">
            <p className="flex items-center gap-1 "><FaRegUser />Publisher: {publisher}</p>
            <p className="flex items-center gap-1 lg:ml-10 "><VscSaveAll />Pages: {totalPages}</p>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-col lg:flex-row gap-2 mt-4 ">
            <button className="btn btn-outline btn-primary rounded-full">
              Category: {category}
            </button>
            <button className="btn btn-warning btn-outline rounded-full">
              Rating: {rating}
            </button>
            <Link
              to={`/bookDetails/${bookId}`}
              className="btn btn-success text-white rounded-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;
