import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Root from "./components/Root";
import CTA from "./components/CTA";
import Test from "./components/Test";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default App;
