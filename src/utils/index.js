import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }

  return books;
};

export const saveBook = (book, category) => {
  let storedBooks = getBooks();
  const isAlreadyInList = storedBooks.some(
    (savedBook) => savedBook.bookId === book.bookId
  );

  if (isAlreadyInList) {
    const isInReadBooks = storedBooks.some(
      (savedBook) =>
        savedBook.bookId === book.bookId && savedBook.category === "read"
    );

    if (isInReadBooks && category === "wishlist") {
      return toast.error("Book already marked as Read");
    } else if (!isInReadBooks && category === "read") {
      const updatedBooks = storedBooks.map((savedBook) =>
        savedBook.bookId === book.bookId
          ? { ...savedBook, category: "read" }
          : savedBook
      );
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      toast.success("Book moved to Read Books");
      return;
    } else {
      return toast.error("Book already exists in this list");
    }
  }

  const updatedBooks = [...storedBooks, { ...book, category }];
  localStorage.setItem("books", JSON.stringify(updatedBooks));
  const successMessage =
    category === "read" ? "Book added to Read Books" : "Book added to Wishlist";
  toast.success(successMessage);
};
