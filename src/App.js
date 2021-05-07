import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection'; 
import Products from './components/Products/Products';
import Resources from './components/Resources/Resources';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

 
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <Products />
        <Resources />
        <Blog />
        <Portfolio />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
