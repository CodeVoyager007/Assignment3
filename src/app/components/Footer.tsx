"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaInstagram, FaGlobe } from "react-icons/fa"; // Added FaGlobe for the portfolio icon
import Link from "next/link";
import BackToTopButton from "./BackToTopButton";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-black py-8 px-4 text-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-6">
          <a
            href="https://github.com/CodeVoyager007"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-black-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:ayeshamughal2162@gmail.com"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/ayesha_techadventures/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-pink-600 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            <FaInstagram />
          </a>
          {/* Portfolio Icon */}
          <Link
            href="https://codevoyager007.github.io/My-Portfolio"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            <FaGlobe /> {/* Using globe icon for the portfolio */}
          </Link>
        </div>

        <BackToTopButton />

        <div>
          <ul>
            <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Rights Reserved */}
        <p className="text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Ayesha Mughal | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
