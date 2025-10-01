import { Link } from "react-router-dom";
import React from "react";

export default function NavMenu({ open, onClose }) {
  return (
    <div
      className={`nav-overlay ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      onClick={onClose}
    >
      <nav
        className="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="nav-close" onClick={onClose} aria-label="Fechar menu">×</button>

        <ul className="nav-list">
          <li><Link to="/" onClick={onClose}>Home</Link></li>

          <li>
            <Link to="/produtos" onClick={onClose}>Produtos</Link>
            <ul className="nav-sub">
              <li><Link to="/produtos/Biquínis" onClick={onClose}>Biquínis</Link></li>
              <li><Link to="/produtos/Pingente de biquíni" onClick={onClose}>Pingente de biquíni</Link></li>
              <li><Link to="/produtos/produto03" onClick={onClose}>produto03</Link></li>
            </ul>
          </li>

          <li><Link to="/sobre" onClick={onClose}>Sobre nós</Link></li>
          <li><Link to="/contato" onClick={onClose}>Contato</Link></li>
        </ul>
      </nav>
    </div>
  );
}
