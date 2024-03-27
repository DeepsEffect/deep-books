/* eslint-disable react/jsx-key */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Components/PagesToRead";
import BookDetails from "./Components/BookDetails";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from "react-hot-toast";
import ReadBooks from "./Components/ReadBooks";
import Wishlist from "./Components/Wishlist";
import FavoriteBooks from "./Pages/FavoriteBooks";
import Faq from "./Components/Faq";
import NotFound from "./Components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/favoriteBooks",
        element: <FavoriteBooks></FavoriteBooks>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>,
  </React.StrictMode>
);
