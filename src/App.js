import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './pages/HomeScreen';
import BrandingScreen from './pages/BrandingScreen';
import ProductsDesignScreen from './pages/ProductsDesignScreen'
import ContentScreen from './pages/ContentScreen'
import BrandEngagement from './pages/BrandEngagement'
import WhatwedoScreen from './pages/WhatwedoScreen'


function App() {
  return (<Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/what-we-do/branding' element={<BrandingScreen />} />
        <Route path='/what-we-do/product-design' element={<ProductsDesignScreen />} />
        <Route path='/what-we-do/content' element={<ContentScreen />} />
        <Route path='/what-we-do/brand-engagement' element={<BrandEngagement />} />
        <Route path='/what-we-do' element={<WhatwedoScreen />} />
      </Routes>

    </div>
  </Router>
  );
}

export default App;
