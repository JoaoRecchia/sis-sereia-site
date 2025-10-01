import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function ProdutoCategoria() {
  const { categoria } = useParams();
  const list = products.filter(p => p.category === categoria);

  return (
    <section className="container section">
      <h2 style={{color:'var(--cor-ouro)'}}>Categoria: {categoria}</h2>
      {list.length === 0 ? (
        <p style={{color:'var(--txt-dim)'}}>Nenhum produto nesta categoria.</p>
      ) : (
        <div className="grid">
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}
