import { NavBar } from "components";
import { Outlet } from "react-router-dom";

export const BasicLayout = () => {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
