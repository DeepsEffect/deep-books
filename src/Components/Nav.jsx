import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 font-work-sans lg:mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={"/"}>
              <a>Home</a>
            </NavLink>
            <NavLink to={"/listedBooks"}>
              <a>Listed Books</a>
            </NavLink>
            <NavLink to={"/pagesToRead"}>
              <a>Pages To Read</a>
            </NavLink>
            <NavLink to={"/favoriteBooks"}>
              <a>Favorite Books</a>
            </NavLink>
            <NavLink to={"/faq"}>
              <a>FAQ || Troubleshoot</a>
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost font-bold text-lg lg:text-2xl">
          Deep Books
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#131313] text-base font-normal space-x-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success"
                : "btn btn-outline border-none"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/listedBooks"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success"
                : "btn btn-outline border-none"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to={"/pagesToRead"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success"
                : "btn btn-outline border-none"
            }
          >
            Pages To Read
          </NavLink>
          <NavLink
            to={"/favoriteBooks"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success"
                : "btn btn-outline border-none"
            }
          >
            Favorite Books
          </NavLink>
          <NavLink
            to={"/faq"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline btn-success"
                : "btn btn-outline border-none"
            }
          >
            FAQ | TroubleShoot
          </NavLink>
        </ul>
      </div>
      <div className="lg:navbar-end space-x-3">
        <a className="btn font-semibold text-sm lg:text-lg btn-success text-white">
          Sign In{" "}
        </a>
        <a className="btn font-semibold text-sm lg:text-lg btn-accent text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
