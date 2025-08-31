import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📦 Mini DSers – Produits</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>{p.title}</strong> – {p.price} €
          </li>
        ))}
      </ul>
      <br />
      <a href="/add">➕ Ajouter un produit</a>
    </div>
  );
    }
  
