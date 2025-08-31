import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'products.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json(JSON.parse(data));
  } else if (req.method === 'POST') {
    const newProduct = req.body;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(201).json({ message: 'Produit ajouté' });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
      }
                     
