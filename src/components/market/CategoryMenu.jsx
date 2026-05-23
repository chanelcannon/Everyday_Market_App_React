import './CategoryMenu.css'
import { useState } from 'react';
import CategoryMenuItem from './CategoryMenuItem';

function CategoryMenu({ categories, onAction }) {

  const [selectedCategory, setSelectedCategory] = useState(null);

  function showCategory(category) {
     setSelectedCategory(category);
     onAction(category);
  }

  return(
    <div className="category-menu">
       <div class="selected-category" style={{ visibility: selectedCategory ? 'visible' : 'hidden' }}>
          <p>Category Selected: {selectedCategory?.name}</p>
      </div>
      <div className="categories-grid">
        <ul>
        {categories.map((category, index) => (
          <CategoryMenuItem key={index} category={category} onAction={showCategory} />
        ))}
      </ul>
      </div>
    </div>
  );
}

export default CategoryMenu;