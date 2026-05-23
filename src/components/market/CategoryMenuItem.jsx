import './CategoryMenuItem.css';

function CategoryMenuItem({category, onAction}) {
  return(
    <div class="category-menu-item" onClick={() => onAction(category)}>
      <li><h3>{category.name}</h3></li>
    </div>
  );
}

export default CategoryMenuItem;