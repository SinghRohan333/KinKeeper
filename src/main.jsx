import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Provider from "./context/Provider.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import Test from "./components/Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
      {/* <Test></Test> */}
    </Provider>
  </StrictMode>,
);
