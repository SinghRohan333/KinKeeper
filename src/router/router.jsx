import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../components/Root";
import FriendDetails from "../components/FriendDetails";
import HydrateFallbackElement from "../components/HydrateFallbackElement";

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
        loader: async () => {
          const timerPromise = new Promise((resolve) =>
            setTimeout(resolve, 2000),
          );
          const [res] = await Promise.all([
            fetch("/friends.json"),
            timerPromise,
          ]);

          if (!res.ok) {
            throw new Error("Failed to fetch details");
          }
          const data = await res.json();
          return data || [];
        },
        element: <FriendDetails></FriendDetails>,
        HydrateFallback: () => (
          <HydrateFallbackElement></HydrateFallbackElement>
        ),
      },
    ],
  },
]);
