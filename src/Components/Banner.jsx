import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero lg:h-[554px] bg-base-200 mt-6 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1621827979802-6d778e161b28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="book-cover image"
          className="max-w-[300px] rounded-lg shadow-2xl"
        />
        <div>
          <div className="max-w-3xl">
            <h1 className=" text-3xl lg:text-5xl font-bold max-w-lg font-playfair">
              Books fot deeper meaning of life
            </h1>
            <p className="py-6">
              enlighten yourself with these amazing books that will change the
              view of how you see this world and life in general.
            </p>
          </div>
          <NavLink to={'/listedBooks'}>
            <button className="btn btn-success font-bold text-white">View The List</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
