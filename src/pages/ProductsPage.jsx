import './ProductsPage.css'
import { useState, useEffect } from 'react';
import marketService from '../services/marketService';
import CategoryMenu from '../components/market/CategoryMenu';

function ProductsPage() {

  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    marketService.loadCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  function increaseCount() {
    setCount(count => count + 1);
  }

  return(
    <div className="products-page">
      <h1>Products</h1>
      <CategoryMenu categories={categories} onAction={increaseCount} />
      <p>Click Count: {count}</p>
    </div>
  );
}

export default ProductsPage;