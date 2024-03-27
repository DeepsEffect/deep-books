import toast from "react-hot-toast";
export const getBooks = (key) => {
  let books = [];
  const storedBooks = localStorage.getItem(key);
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }

  return books;
};

// read books function 
export const readBooks = (book) => {
  let books = getBooks("readBooks");
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error(`"${book.bookName}" is already added to the Read Books`);
  }
  books.push(book);
  localStorage.setItem("readBooks", JSON.stringify(books));
  toast.success(`"${book.bookName}" is successfully added to the Read Books`);
};

// wishlist function
export const wishlistBooks = (book) => {
  let books = getBooks("wishlistBooks");
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error(`"${book.bookName}" is already added to the wishlist`);
  }
  books.push(book);
  localStorage.setItem("wishlistBooks", JSON.stringify(books));
  toast.success(`"${book.bookName}" is successfully added to the Wishlist`);
};
