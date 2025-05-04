import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Jeux from './components/Jeux';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './joueur/Dashboard';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <Jeux />
                <Apropos />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;