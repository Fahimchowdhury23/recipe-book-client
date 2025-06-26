import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer gap-4 lg:gap-5 footer-horizontal footer-center bg-primary rounded p-5 lg:p-8">
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            className="w-14 h-14 cursor-pointer"
            src="https://i.ibb.co/sdgpf1pV/illustration-cooking-logo-solid-background-852896-5161-removebg-preview.png"
            alt="logo"
          />
        </Link>
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer text-accent">
            Recipe Book
          </h1>
        </Link>
      </div>

      <nav className="grid grid-flow-col text-lg text-accent font-medium">
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
            <FaGithub className="cursor-pointer" size={30} />
          </a>
          <a
            href="https://discord.com/users/879041544181649500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="cursor-pointer" size={30} />
          </a>
          <a
            href="https://www.facebook.com/fahimchowdhury23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer" size={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="cursor-pointer" size={30} />
          </a>
        </div>
      </nav>

      <aside>
        <p className="text-lg text-accent">
          Copyright © {new Date().getFullYear()} - All right reserved by Recipe
          Book Inc.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
