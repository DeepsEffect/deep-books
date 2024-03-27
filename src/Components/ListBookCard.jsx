import { Link } from "react-router-dom";
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
  console.log(book);

  return (
    <div className="hero bg-base-100 border p-4 lg:p-8 mt-10 rounded-2xl">
      <div className="flex w-full md:gap-6 lg:gap-10 items-center">
        <figure className="">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </figure>
        <div className="w-full space-y-4">
          <h1 className="text-2xl font-bold font-playfair flex-grow">
            {bookName}
          </h1>
          <p>
            <span>by: </span>
            {author}
          </p>
          <div className="card-actions mt-2">
            {tags.map((tag, idx) => (
              <div className="badge badge-outline badge-success" key={idx}>
                {tag}
              </div>
            ))}
            <p>Year Of Publishing: {yearOfPublishing}</p>
          </div>
          <div className="flex gap-2">
            <p>Publisher: {publisher}</p>
            <p>Pages: {totalPages}</p>
          </div>
          <div className="divider m-0"></div>
          <div className="flex gap-2 mt-4">
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
