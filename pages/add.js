import { useState } from 'react';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price }),
    });
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h1>Ajouter un produit</h1>
      <input
        type="text"
        placeholder="Nom du produit"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <br /><br />
      <button type="submit">Ajouter</button>
    </form>
  );
    }
  
