import './CategoryMenuItem.css';

function CategoryMenuItem({category}) {
  return(
    <div class="category-menu-item" onClick={() => onItemClick(category)} onKeyPress={() => onItemClick(category)} tabIndex="0">
      <h3>{category.name}</h3>
    </div>
  );
}

export default CategoryMenuItem;