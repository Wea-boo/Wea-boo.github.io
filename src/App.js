
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Description from './components/Description';
import Categories from './components/Categories';


function App() {
  return (
    <div className="App" >
      <Navbar />
      <HeroBanner />
      <Description />
      <Categories />

    </div>
  );
}

export default App;
