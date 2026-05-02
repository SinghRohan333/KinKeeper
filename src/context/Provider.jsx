import React from "react";
import { Context } from "./context";

// const fetchFriendsData = async () => {
//   try {
//     const res = await fetch("/friends.json");
//     if (!res.ok) {
//       console.error("Response error!");
//       return;
//     }
//     const data = await res.json();
//     if (data) {
//       return data;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error(`Error happend - ${error}`);
//   }
// };
// const friendsPromise = fetchFriendsData();

const Provider = ({ children }) => {
  const data = {};
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
