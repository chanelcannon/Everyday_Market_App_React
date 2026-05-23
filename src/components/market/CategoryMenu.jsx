import './CategoryMenu.css'
import { useState, useEffect } from 'react';
import marketService from '../../services/marketService';
import CategoryMenuItem from './CategoryMenuItem';

function CategoryMenu({ categories }) {

  const [loadCategories, setLoadCategories] = useState([]);

  useEffect(() => {
    setLoadCategories(categories);
  }, [categories]);

  return(
    <div className="category-menu">
      <h1>Categories</h1>
      <div className="categories">
        {loadCategories.map((category, index) => (
          <CategoryMenuItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;