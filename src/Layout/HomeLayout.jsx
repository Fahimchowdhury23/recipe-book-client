import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const HomeLayout = () => {
  return (
    <section>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <ScrollToTop></ScrollToTop>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default HomeLayout;
