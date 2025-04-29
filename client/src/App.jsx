import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Jeux from './components/Jeux';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;