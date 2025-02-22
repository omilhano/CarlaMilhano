import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import NavbarComponents from './components/Navbar';
import SobreMimPage from './pages/SobreMim';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mindfulwalking from './pages/Mindfulwalking';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponents />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobre-mim" element={<SobreMimPage />} />
          <Route path="/mindful" element={<Mindfulwalking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
