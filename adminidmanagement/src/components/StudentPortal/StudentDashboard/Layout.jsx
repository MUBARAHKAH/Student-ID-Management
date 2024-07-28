import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Header />
<<<<<<< HEAD
      <div className="w-full p-[5rem] pr-[1rem] ">
=======
      <div className=" pt-[6rem] px-[1rem]  w-full">
>>>>>>> a2bb7f1e3e68f57cf3f15d5eb8347aff16a1d038
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
