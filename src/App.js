import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import NavbarComponents from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mindfulwalking from './pages/Mindfulwalking';
import PsicologiaPsicoterapia from './pages/psicologiaPsicoterapia';
import Eventos from './pages/Eventos';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponents />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mindfulwalking" element={<Mindfulwalking />} />
          <Route path="/psicologiaepsicoterapia" element={<PsicologiaPsicoterapia />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
