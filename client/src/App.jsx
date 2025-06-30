import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Jeux from "./components/Jeux";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./joueur/Dashboard.jsx";
import CultureGeneraleAfricaine from "./joueur/CultureGeneraleAfricaine.jsx";
import Nature from "./joueur/Nature.jsx";
import Safari from "./joueur/Safari.jsx";
import EffectuerGame from "./joueur/EffectuerGame.jsx";

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
          <Route path="/dashboard-joueur" element={<Dashboard />} />
          <Route path="/effectuer/:gameId" element={<EffectuerGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
