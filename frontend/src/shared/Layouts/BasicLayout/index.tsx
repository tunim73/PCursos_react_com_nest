import { Footer, NavBar } from "components";
import { Outlet } from "react-router-dom";

export const BasicLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen block pb-6 border-b-2 border-gray-300">
        <nav>
          <NavBar />
        </nav>
        <main className="flex justify-center items-start  w-full">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
