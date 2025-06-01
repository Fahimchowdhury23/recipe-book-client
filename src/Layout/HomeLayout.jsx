import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import Loader from "../Components/Loader";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <section className="bg-gradient-to-b min-h-screen from-bg-base-100 to-primary">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default HomeLayout;
