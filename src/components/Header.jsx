import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import React from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  // trava scroll quando o menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // BOTAO DO MENU
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Ir para a Home">
          <span className="brand-text">
            <span className="brand-strong">Sis Sereia</span>
            <span className="brand-dot">•</span>
            <span className="brand-sub">Swimwear</span>
          </span>
        </Link>
        
        
        <button
          className="hamburger"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <NavMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
