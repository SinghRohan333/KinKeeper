import React, { Suspense, use, useContext } from "react";
import { Context } from "../context/context";
import Friends from "./Friends";
import Fallback from "./Fallback";
import CTA from "./CTA";

const Root = () => {
  const fetchFriendsData = async () => {
    const timerPromise = new Promise((resolve) => setTimeout(resolve, 2500));

    try {
      const [res] = await Promise.all([fetch("/friends.json"), timerPromise]);

      if (!res.ok) {
        throw new Error("Response Error!");
        return;
      }
      const data = await res.json();
      if (data) {
        return data;
      } else {
        return [];
      }
    } catch (error) {
      console.error(`Error happend - ${error}`);
      return [];
    }
  };
  return (
    <>
      <CTA></CTA>
      <div>
        <Suspense fallback={<Fallback></Fallback>}>
          <Friends fetchFriendsData={fetchFriendsData()}></Friends>
        </Suspense>
      </div>
    </>
  );
};

export default Root;
