import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../components/Root";
import FriendDetails from "../components/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Root></Root>,
      },
      {
        path: "/details",
        element: <Root></Root>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/friends.json"),
        element: <FriendDetails></FriendDetails>,
      },
    ],
  },
]);
