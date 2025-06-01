import React from "react";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <section className="bg-gradient-to-b from-bg-base-100 to-primary min-h-screen">
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
