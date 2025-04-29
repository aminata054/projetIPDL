import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo2.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white text-blue-800 font-bold shadow shadow-black/50 rounded-br-full rounded-bl-full">
      <div className="flex justify-center items-center relative">
        <div className="ml-12 flex justify-start items-start w-full">
          <Link to="/">
            <img className="h-14" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mr-5 flex justify-end items-center h-12 w-full">
          <div className="space-x-5 flex justify-center items-center text-[#722714]">
            <a href="#jeux">Jeux</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Nous contacter</a>
          </div>
          <div
            className="flex justify-start items-center shadow shadow-black/50 bg-[#722714] h-9 rounded-full w-1/3 text-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="m-auto flex justify-center items-center shadow shadow-black/50 h-8 rounded-full w-1/2 bg-contain bg-[url('/src/assets/img/african-pattern.png')]">
              <span className={`${isMenuOpen ? '' : 'hidden'} text-white`}>Se connecter</span>
            </div>
            <span className={`m-auto italic text-white ${isMenuOpen ? 'hidden' : ''}`}>
              Se connecter
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;