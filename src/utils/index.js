import toast from "react-hot-toast";
export const getBooks = (key) => {
  let books = [];
  const storedBooks = localStorage.getItem(key);
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }

  return books;
};

export const readBooks = book => {
  let books = getBooks('readBooks')
  const isExist = books.find(b => b.bookId === book.bookId)
  if (isExist) {
    return toast.error('already exists')
  }
  books.push(book)
  localStorage.setItem('readBooks', JSON.stringify(books))
  toast.success('added successfully')
}

export const wishlistBooks = book => {
  let books = getBooks('wishlistBooks')
  const isExist = books.find(b => b.bookId === book.bookId)
  if (isExist) {
    return toast.error('already exists')
  }
  books.push(book)
  localStorage.setItem('wishlistBooks', JSON.stringify(books))
  toast.success('added successfully')
}
