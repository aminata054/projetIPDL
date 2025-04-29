import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import loginImage from '../assets/img/9.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden"
      >
        {/* Image à gauche */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Formulaire à droite */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 p-10"
        >
          <h2 className="text-4xl font-bold text-[#722714] mb-8 text-center">Connexion</h2>
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-red-500 text-sm mb-6 text-center"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          <form onSubmit={handleSubmit}>
            <motion.div
              className="mb-6 relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="flex items-center border rounded-md shadow-sm focus-within:ring-2 focus-within:ring-[#e59b2e]">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mx-3" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3 border-0 focus:outline-none focus:ring-0"
                  required
                />
              </div>
            </motion.div>
            <motion.div
              className="mb-8 relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="flex items-center border rounded-md shadow-sm focus-within:ring-2 focus-within:ring-[#e59b2e]">
                <FontAwesomeIcon icon={faLock} className="text-gray-400 mx-3" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 px-3 border-0 focus:outline-none focus:ring-0"
                  required
                />
              </div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(229, 155, 46, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className={`w-full bg-[#e59b2e] text-white font-semibold rounded-full py-3 transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#722714]'
              }`}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </motion.button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Pas de compte ?{' '}
            <Link to="/register" className="text-[#722714] font-semibold hover:underline">
              Inscrivez-vous
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;