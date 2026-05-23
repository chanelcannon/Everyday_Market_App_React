import './ProductsPage.css'
import { useState, useEffect } from 'react';
import marketService from '../services/marketService';
import CategoryMenu from '../components/market/CategoryMenu';

function ProductsPage(){

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    marketService.loadCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return(
    <div className="products-page">
      <h1>Products</h1>
      <CategoryMenu categories={categories} />
    </div>
  );
}

export default ProductsPage;