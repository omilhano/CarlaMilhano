import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import NavbarComponents from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mindfulwalking from './pages/Mindfulwalking';
import PsicologiaPsicoterapia from './pages/psicologiaPsicoterapia';
import Eventos from './pages/Eventos';
import Admin from './pages/Admin';
import Contacts from './pages/Contacts';
import { Analytics } from "@vercel/analytics/react"

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
          <Route path="/contacts" element={<Contacts />} />
          <Route path={process.env.REACT_APP_SECRET_ROUTE} element={<Admin />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
