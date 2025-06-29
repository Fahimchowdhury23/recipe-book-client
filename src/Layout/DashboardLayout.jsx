import React from "react";
import { Outlet, useNavigation } from "react-router";
import ScrollToTop from "../Components/ScrollToTop";
import Loader from "../Components/Loader";
import Sidebar from "../Pages/Sidebar";

const DashboardLayout = () => {
  const { state } = useNavigation();

  return (
    <section className="bg-gradient-to-b min-h-screen from-bg-base-100 to-primary">
      <Sidebar></Sidebar>

      <main className="">
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
    </section>
  );
};

export default DashboardLayout;
