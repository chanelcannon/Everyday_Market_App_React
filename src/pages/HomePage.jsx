import './HomePage.css'
import { Link } from 'react-router-dom';

function HomePage(){
  return(
    <div className="home-page">
      <h1>Home Page</h1>
      <h2>Welcome to Chanel's Everyday Market!</h2>
      <p>Head to our products page to browse our selection.</p>
      <Link to="/products" className="button">Click here to view products</Link>
    </div>
  );
}

export default HomePage;