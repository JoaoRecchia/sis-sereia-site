import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-brand">Sis-Sereia</div>

        <nav className="footer-links">
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <div className="footer-small">© {new Date().getFullYear()} Sis-Sereia. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
