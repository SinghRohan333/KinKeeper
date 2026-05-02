import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../components/Root";
import FriendDetails from "../components/FriendDetails";
import HydrateFallbackElement from "../components/HydrateFallbackElement";
import Timeline from "../components/Timeline";
import Stats from "../components/Stats";
import NotFound from "../components/NotFound";

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
        HydrateFallback: () => (
          <HydrateFallbackElement></HydrateFallbackElement>
        ),
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/statistics",
        element: <Stats></Stats>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
