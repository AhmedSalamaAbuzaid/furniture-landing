import Navbar from './components/Navebar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
import { Routes, Route } from 'react-router-dom';
import ContectMe from './components/Contact';
import ProductDetails from './components/ProductDetails'

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"
          element={
            <>
                <Slider />
                <ProductsList />
              </>
          }
        />
        <Route path="contact" element={<ContectMe />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
