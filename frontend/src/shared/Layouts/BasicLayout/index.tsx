import { Footer, NavBar } from "components";
import { Outlet } from "react-router-dom";

export const BasicLayout = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="h-auto min-h-screen relative items-center justify-center pb-6">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
