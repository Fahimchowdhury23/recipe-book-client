import React from "react";
import { Outlet, useNavigation } from "react-router";
import ScrollToTop from "../Components/ScrollToTop";
import Loader from "../Components/Loader";
import Sidebar from "../Pages/Sidebar";

const DashboardLayout = () => {
  const { state } = useNavigation();

  return (
    <section className="bg-gradient-to-b from-bg-base-100 to-primary min-h-screen">
      <Sidebar></Sidebar>

      <main>
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
    </section>
  );
};

export default DashboardLayout;
