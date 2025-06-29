import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer gap-3 lg:gap-4 footer-horizontal footer-center bg-primary rounded p-3  md:p-4 lg:p-6">
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer"
            src="https://i.ibb.co/sdgpf1pV/illustration-cooking-logo-solid-background-852896-5161-removebg-preview.png"
            alt="logo"
          />
        </Link>
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-bold cursor-pointer text-accent">
            Recipe Book
          </h1>
        </Link>
      </div>

      <nav className="grid grid-flow-col gap-0 whitespace-nowrap md:text-lg text-accent font-medium">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/allRecipes">
          All Recipes
        </NavLink>

        <NavLink className="nav-link" to="/features">
          Features
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>

      {/* Social Icons with Links */}

      <nav>
        <div className="flex gap-5">
          <a
            href="https://github.com/Fahimchowdhury23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer text-2xl md:text-3xl" />
          </a>
          <a
            href="https://discord.com/users/879041544181649500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="cursor-pointer text-2xl md:text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/fahimchowdhury23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer text-2xl md:text-3xl" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="cursor-pointer text-2xl md:text-3xl" />
          </a>
        </div>
      </nav>

      <aside>
        <p className="md:text-lg text-accent pb-3 lg:pb-0">
          Copyright © {new Date().getFullYear()} - Recipe Book | All rights
          reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
