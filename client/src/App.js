import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProductDetail from './components/product/ProductDetail';



function App() {
  return (
    <Router>

      <HelmetProvider>
         <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
          <Footer/>
      </HelmetProvider>

    </Router>
  );
}

export default App;
