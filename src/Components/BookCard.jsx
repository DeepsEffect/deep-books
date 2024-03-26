import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  const {bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <NavLink to={`/bookDetails/${bookId}`} className="card w-96 bg-base-100 shadow-xl border-2 mt-6 flex flex-col">
      <figure className="h-[400px] p-8">
        <img src={image} alt="book image" className="" />
      </figure>
      <div className="card-body px-8 py-0 pb-6 ">
        <div className="card-actions ">
          {tags.map((tag, idx) => (
            <div className="badge badge-outline badge-success" key={idx}>
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title font-playfair font-bold text-2xl text-[#131313]">{bookName}</h2>
        <p>by: {author}</p>
        <div className="divider m-0"></div>
        <div className="flex justify-between">
          <p>{category}</p>
          <p>{rating}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default BookCard;
