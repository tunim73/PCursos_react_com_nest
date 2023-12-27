import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Router } from "./Routes";
import { LightTheme } from "shared/theme/Light";
import { Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Flowbite theme={{theme:LightTheme}}>
      <RouterProvider router={Router} />
    </Flowbite>
  </React.StrictMode>
);
