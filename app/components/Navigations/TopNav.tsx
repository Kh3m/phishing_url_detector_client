"use client";

import Image from "next/image";
import { useState } from "react";
import phishawareLogo from "@/app/favicon.ico";
import Link from "next/link";
import Wrapper from "../Wrapper";
import { HiMenu, HiX } from "react-icons/hi"; // Heroicons for menu icon

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <Wrapper>
        <div className="mx-auto py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={phishawareLogo}
              alt="PhishAware logo"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold">PhishAware</h1>
              <p className="text-sm text-gray-500">Learn. Scan. Stay Safe.</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/quiz" className="text-sm font-medium hover:underline">
              Take Quiz
            </Link>
            <Link href="/guide" className="text-sm font-medium hover:underline">
              Guide
            </Link>
            <a href="#scanner" className="text-sm font-medium hover:underline">
              Scanner
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow-lg rounded-b-xl py-4 flex flex-col gap-3 px-4">
            <Link
              href="/"
              className="text-sm font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/quiz"
              className="text-sm font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Take Quiz
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Guide
            </Link>
            <a
              href="#scanner"
              className="text-sm font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Scanner
            </a>
          </nav>
        )}
      </Wrapper>
    </header>
  );
};

export default TopNav;
