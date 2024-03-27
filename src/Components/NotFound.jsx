import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center items-center h-[calc(100vh-130px)]">
        <h2 className="text-2xl font-bold">404 Page not found</h2>
        <p>Tumi ja chao ta kokhonoi pabe na.</p>
        <p>Barite chole jao</p>
        <Link to={"/"} className="btn mt-4">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
