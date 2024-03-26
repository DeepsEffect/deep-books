import { useLoaderData, useParams,  } from "react-router-dom";

const BookDetails = () => {
  const bookData = useLoaderData();
  const {bookId} = useParams();
  const book = bookData.find(book => book.bookId == bookId);
//   console.log(book);
  return (
    <div>
      <h2>bookName: {book.bookName}</h2>
    </div>
  );
};

export default BookDetails;
