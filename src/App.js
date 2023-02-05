
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Description from './components/Description';
import Categories from './components/Categories';
import Goals from './components/Goals';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App" >
      <Navbar />
      <HeroBanner />
      <Description />
      <Categories />
      <Goals />
      <Sponsors />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
