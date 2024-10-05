"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex-shrink-0">
              {/* Reemplaza esto con tu logo */}
              <svg
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </Link>
          <div className="hidden sm:flex space-x-4">
            <Link
              href="/"
              className={`relative inline-block transition-colors hover:text-[#FFFFFF] transition hover:duration-300 hover:ease-in-out hover:bg-[#33aadd] px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/"
                  ? "text-[#FFFFFF] bg-[#33aadd]"
                  : "text-gray-600"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/treatments"
              className={`relative inline-block transition-colors hover:text-[#FFFFFF] transition hover:duration-300 hover:ease-in-out hover:bg-[#33aadd] px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/treatments"
                  ? "text-[#FFFFFF] bg-[#33aadd]"
                  : " text-gray-600"
              }`}
            >
              Tratamientos
            </Link>
            <Link
              href="/contact"
              className={`relative inline-block transition-colors hover:text-[#FFFFFF] transition hover:duration-300 hover:ease-in-out hover:bg-[#33aadd] px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/contact"
                  ? "text-[#FFFFFF] bg-[#33aadd]"
                  : "text-gray-600"
              }`}
            >
              Contacto
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/" ? "text-[#33aadd]" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/treatments"
              className={`block hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/treatments" ? "text-[#33aadd]" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Tratamientos
            </Link>
            <Link
              href="/contact"
              className={`block hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/contact" ? "text-[#33aadd]" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
