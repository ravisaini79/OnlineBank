
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Card from './components/Card';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Form from './components/Form';
import Nav from './components/Nav';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div>

      {/* <ProductDetails /> */}

      <Routes>
        {/* <Route path='/Navbar' element={<NavBar/>}/> */}
        <Route path='/' element={<Home />} />
        <Route path="/card" element={< Card />} />
        <Route path='/form' element={<Form />} />
        <Route path='/productDetails' element={<ProductDetails />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
