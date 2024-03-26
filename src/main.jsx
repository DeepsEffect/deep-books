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
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
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
