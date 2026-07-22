import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SiteFooter from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import MRO from './pages/MRO.jsx';
import GovernmentSupply from './pages/GovernmentSupply.jsx';
import ConstructionMaterials from './pages/ConstructionMaterials.jsx';
import About from './pages/About.jsx';
import Career from './pages/Career.jsx';
import Contact from './pages/Contact.jsx';
import Search from './pages/Search.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mro" element={<MRO />} />
          <Route path="/government-supply" element={<GovernmentSupply />} />
          <Route path="/construction-materials" element={<ConstructionMaterials />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
