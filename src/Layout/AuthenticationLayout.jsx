import React from "react";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <section>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <ScrollToTop></ScrollToTop>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default AuthenticationLayout;
