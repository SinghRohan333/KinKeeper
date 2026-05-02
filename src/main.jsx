import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Provider from "./context/Provider.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import Test from "./components/Test.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
      {/* <Test></Test> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "#130920",
          border: "1px solid rgba(244,114,182,0.15)",
          borderRadius: "14px",
          color: "rgba(253,232,244,0.90)",
          fontFamily: "'Inter', sans-serif",
        }}
      />
    </Provider>
  </StrictMode>,
);
