"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    // O z-50 garante que o header fique por cima de tudo.
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-background/50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold font-mono tracking-tighter"
        >
          <span className="text-primary">E</span>nrico
        </Link>

        {/* Navegação Desktop (some no mobile). */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="#sobre" className="hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link
            href="#projetos"
            className="hover:text-primary transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Botão do Menu Mobile (some no desktop) */}
        <button
          className="md:hidden text-default text-2xl p-2"
          onClick={() => setopenMenu(!openMenu)}
          aria-label="Alternar menu"
        >
          <FontAwesomeIcon
            icon={openMenu ? faXmark : faBars}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Menu Mobile Dropdown. */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center ${
          openMenu
            ? "max-h-64 py-6 border-b border-primary/20"
            : "max-h-0 py-0"
        }`}
      >
        <Link
          href="#sobre"
          onClick={() => setopenMenu(false)}
          className="py-3 text-xl w-full text-center hover:text-primary transition-colors"
        >
          Sobre
        </Link>
        <Link
          href="#projetos"
          onClick={() => setopenMenu(false)}
          className="py-3 text-xl w-full text-center hover:text-primary transition-colors"
        >
          Projetos
        </Link>
        <Link
          href="#contato"
          onClick={() => setopenMenu(false)}
          className="py-3 text-xl w-full text-center hover:text-primary transition-colors"
        >
          Contato
        </Link>
      </div>
    </header>
  );
}
