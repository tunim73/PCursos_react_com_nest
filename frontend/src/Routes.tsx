import { ErrorPage, Home, Login } from "pages/public";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { BasicLayout } from "shared/Layouts";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"}/>
  },
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
