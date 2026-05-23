import { Routes, Route } from 'react-router-dom';
import Products from './pages/ProductsPage';
import Home from './pages/HomePage';
import Header from './components/common/Header'
import './App.css'
import Footer from './components/common/Footer';

function App() {

  return (
    <>
      <Header title={"Chanel's Every Day Market"} />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
