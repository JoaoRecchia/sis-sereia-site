// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products, productCategories } from "../data/products.js";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-card">
          <h1>Elegância praiana com alma de sereia 🐚</h1>
          <p>
            Modelagens que valorizam, tecidos tecnológicos e o brilho dourado
            que é a sua assinatura.
          </p>
          <div className="hero-actions">
            <a className="hero-btn primary" href="#produtos">Ver coleção</a>
            <a className="hero-btn" href="/sobre">Sobre a SIS</a>
          </div>
        </div>
      </section>

      {/* PRODUTOS (agrupados por categoria, máx. 4 por seção) */}
      <section className="container section" id="produtos">
        {productCategories.map((cat) => {
          const list = products.filter((p) => p.category === cat);
          if (list.length === 0) return null;

          const preview = list.slice(0, 4); // limita a 4

          return (
            <div key={cat} className="categoria-bloco">
              <div className="section-header">
                <h2 style={{ color: "var(--cor-ouro)", margin: 0 }}>{cat}</h2>
              </div>

              <div className="grid">
                {preview.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              {/* Botão no canto inferior direito */}
              <div className="section-footer">
                <Link className="btn-vermais" to={`/produtos/${cat}`}>
                  Ver mais
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
