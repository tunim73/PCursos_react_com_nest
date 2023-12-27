import { ErrorPage, Login } from "pages/public";
import { createBrowserRouter } from "react-router-dom";
import { BasicLayout } from "shared/Layouts";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
