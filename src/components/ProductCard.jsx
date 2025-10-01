import React, { useState } from "react";
import ProductModal from "./ProductModal.jsx";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false); // controla se o modal está aberto ou não

  return (
    <>
      <article className="card">
        {/* imagem do produto (lazy para performance em mobile) */}
        <img
          className="card-media"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-desc">{product.desc}</p>

          {/* metadados (tamanhos, tecido, preço) */}
          <div className="meta">
            <span className="badge">Tamanhos: {product.sizes}</span>
            <span className="badge ouro">Tecido: {product.fabric}</span>
            <span className="preco">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <div className="actions">
            {/* botão que abre o modal de detalhes */}
            <button className="btn-sec" onClick={() => setOpen(true)}>
              Detalhes
            </button>

            {/* botão que leva direto pro WhatsApp */}
            <a
              className="btn-prim"
              href={`https://wa.me/5511947821133?text=Olá,%20tenho%20interesse%20no%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar
            </a>
          </div>
        </div>
      </article>

      {/* se "open" for true, renderiza o modal */}
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}

/*  -------------  DEIXANDO RESPONSIVO  --------------------
  - A imagem usa loading="lazy".
  - Os botões herdam do theme.css (.actions com flex-wrap, .btn-prim/.btn-sec com flex:1 1 140px).
  - Nada “estoura” em telas pequenas.
---------------------------------------------------------- */
