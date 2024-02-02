import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes";
import { Flowbite } from "flowbite-react";
import { ToastContainer } from "react-toastify";
import { LightTheme } from "shared/theme/Light";
import { AuthProvider } from "shared/contexts";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Flowbite theme={{ theme: LightTheme }}>
        <ToastContainer />
        <RouterProvider router={Router} />
      </Flowbite>
    </AuthProvider>
  </React.StrictMode>
);
