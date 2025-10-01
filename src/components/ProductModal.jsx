import React, { useState } from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null; // se não houver produto selecionado, não renderiza nada

  // pega as imagens do produto; se não tiver, usa só a principal
  const imgs = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const [current, setCurrent] = useState(0); // estado para controlar a foto atual

  return (
    // fundo escuro clicável para fechar
    <div className="pm-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="pm-dialog" onClick={(e) => e.stopPropagation()}>
        {/* botão de fechar */}
        <button className="pm-close" onClick={onClose} aria-label="Fechar">×</button>

        <div className="pm-body">
          {/* área de imagens */}
          <div className="pm-media">
            {/* imagem principal (a escolhida no estado) */}
            <img className="pm-hero" src={imgs[current]} alt={product.name} />

            {/* miniaturas para trocar de imagem */}
            {imgs.length > 1 && (
              <div className="pm-thumbs">
                {imgs.map((src, idx) => (
                  <button
                    key={idx}
                    className={`pm-thumb ${idx === current ? "is-active" : ""}`}
                    onClick={() => setCurrent(idx)} // troca a imagem
                    aria-label={`Foto ${idx + 1}`}
                  >
                    <img src={src} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* área de informações */}
          <div className="pm-info">
            <h3 className="pm-title">{product.name}</h3>
            <p className="pm-desc">{product.desc}</p>

            <ul className="pm-facts">
              <li><strong>Tamanhos:</strong> {product.sizes}</li>
              <li><strong>Tecido:</strong> {product.fabric}</li>
              <li><strong>Preço:</strong> {product.price.toLocaleString('pt-BR',{ style:'currency', currency:'BRL' })}</li>
              <li><strong>Categoria:</strong> {product.category}</li>
            </ul>

            {/* botão de compra via WhatsApp */}
            <div className="pm-actions">
              <a
                className="btn-prim"
                href={`https://wa.me/5511947821133?text=Olá,%20tenho%20interesse%20no%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
