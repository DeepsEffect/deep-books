import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div className="container mx-auto font-work-sans">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
