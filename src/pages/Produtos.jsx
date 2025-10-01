import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

export default function Produtos(){
  return (
    <section className="container">
      <h1 style={{color:'var(--cor-ouro)'}}>Todos os produtos</h1>
      <p>Catálogo em construção — adicione, filtre e categorize conforme seu estoque.</p>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
