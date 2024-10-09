import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import CategoryList from './pages/CategoryList';
import ProductsList from './pages/ProductsList';
import ProductView from './pages/ProductView';

import { CartProvider } from './context';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="/item/:id" element={<ProductView />} />
              <Route path="/category/:id" element={<CategoryList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
