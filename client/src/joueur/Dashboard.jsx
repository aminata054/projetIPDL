import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faSignOutAlt,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import badgeImage from "../assets/img/badge.png";
import statImage from "../assets/img/7.png";
import plan1 from "../assets/img/7.png";
import plan2 from "../assets/img/12.png";
import partie1 from "../assets/img/bg.webp";
import logoWhite from "../assets/img/logoWhite.png";

function Dashboard() {
  const [joueur] = useState({
    prenom: "Jasmeen",
    nom: "Cruz",
    classement: 1,
    niveau: "Expert",
  });
  const [totaljouer] = useState(50);
  const [scoreTotal] = useState(8275);
  const [dernierePartie] = useState({
    nom: "Culture Générale Africaine : 5 Questions Essentielles",
    score: 516,
    niveau: "Intermédiaire",
    miniature: partie1,
  });
  const [plans] = useState([
    { id: 1, nom: "Culture Générale Africaine", miniature: plan1 },
    { id: 2, nom: "Quiz de la Nature Générale Africaine", miniature: plan2 },
    {
      id: 3,
      nom: "Safari Quiz : Explorez la Faune et la Nature Africaines",
      miniature: plan1,
    },
  ]);

  const [displayScore, setDisplayScore] = useState(0);
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const incrementScore = scoreTotal / steps;
    const incrementStat1 = 5325 / steps;
    const incrementStat2 = 4006 / steps;
    const incrementStat3 = 4000 / steps;

    let currentScore = 0;
    let currentStat1 = 0;
    let currentStat2 = 0;
    let currentStat3 = 0;

    const timer = setInterval(() => {
      currentScore += incrementScore;
      currentStat1 += incrementStat1;
      currentStat2 += incrementStat2;
      currentStat3 += incrementStat3;

      if (currentScore >= scoreTotal) currentScore = scoreTotal;
      if (currentStat1 >= 5325) currentStat1 = 5325;
      if (currentStat2 >= 4006) currentStat2 = 4006;
      if (currentStat3 >= 4000) currentStat3 = 4000;

      setDisplayScore(Math.floor(currentScore));
      setStat1(Math.floor(currentStat1));
      setStat2(Math.floor(currentStat2));
      setStat3(Math.floor(currentStat3));

      if (
        currentScore >= scoreTotal &&
        currentStat1 >= 5325 &&
        currentStat2 >= 4006 &&
        currentStat3 >= 4000
      ) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [scoreTotal]);

  const handlePlayGame = (gameId) => {
  navigate(`/effectuer/${gameId}`);
};


  return (
    <div className="min-h-screen bg-afrik-dark text-white flex">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[10%] h-screen fixed left-0 flex justify-center items-center py-5"
      >
        <div className="bg-black bg-opacity-35 h-full py-4 shadow-inner rounded-full w-1/2 text-white flex flex-col items-center space-y-6">
          <Link to="/">
            <div className="flex justify-center items-center">
              <img className="h-14" src={logoWhite} alt="Logo" />
            </div>
          </Link>
          <Link to="/joueur/dashboard">
            <div className="h-10 flex justify-center items-center">
              <svg
                className="h-8 w-6 fill-current text-white hover:text-afrik-red"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill=""
                  d="M0.00676782204,6.77232286 C-0.0494507818,5.65586163 0.245894841,4.55305045 0.84355309,3.62839007 L0.99923733,3.40103165 L1.01210426,3.38857175 L1.12018651,3.26174784 L1.12018651,3.26174784 L1.23341553,3.13225394 L1.24628246,3.11890406 C1.46244695,2.89729595 1.70177193,2.70238761 1.9599684,2.53595903 L2.03288103,2.48979068 L2.03288103,2.48979068 L2.10579365,2.44695979 L2.27735277,2.34817064 C2.34683422,2.31524092 2.42232023,2.27608125 2.49180167,2.24315153 C2.54241161,2.2235717 2.59302155,2.19776192 2.64363149,2.17818209 C2.73884681,2.13813243 2.84006669,2.09897277 2.94128657,2.06604305 C2.97559839,2.04913319 3.01162581,2.03578331 3.04851102,2.02688338 L3.08947076,2.01041852 L3.08947076,2.01041852 L3.13429058,1.99395366 C3.59578461,1.85600484 4.07014558,1.76077565 4.54965332,1.71716603 L4.5,1.72298326 L4.5,0.728345984 C4.5,0.329539814 4.82169259,0.00708167176 5.21955196,0.00708167176 C5.61741133,0.00708167176 5.94,0.329539814 5.94,0.728345984 L5.94,3.87208831 C5.94,4.27089448 5.61741133,4.59425084 5.21955196,4.59425084 C4.82169259,4.59425084 4.5,4.27089448 4.5,3.87208831 L4.50004747,3.14527577 C4.02769655,3.19256915 3.56389095,3.31009562 3.12399703,3.49626084 C1.98883322,4.00693847 1.44745054,4.97946655 1.39615018,6.52067306 L1.39210771,6.76876289 L1.39210771,7.15590959 L16.6085438,7.15590959 L16.6085438,6.75897298 C16.6377089,6.04519907 16.494457,5.33498514 16.1907974,4.69330061 C15.8991469,4.1441753 15.4325061,3.71786894 14.8689344,3.48647092 C14.5100327,3.33196824 14.1341124,3.22417236 13.7499572,3.16536166 L13.5,3.13498326 L13.5000297,3.86846142 C13.5000297,4.26554745 13.1778298,4.58716917 12.7800299,4.58716917 C12.38223,4.58716917 12.06003,4.26554745 12.06003,3.86846142 L12.06,3.08098326 L5.94700235,3.08152438 L5.94700235,1.65130659 L12.06,1.65098326 L12.06003,0.724115014 C12.05643,0.327028983 12.37683,0.00271211083 12.7746299,1.15491618e-13 C13.1724298,-0.00267819729 13.4973297,0.316248366 13.5000297,0.713334398 L13.500604,1.71745172 C13.8499757,1.75192359 14.19651,1.8128727 14.5375476,1.89995417 L14.8766545,1.99573365 C14.904104,2.0010736 14.9246911,2.00819354 14.9624341,2.02154343 C15.0001771,2.03489331 15.0319155,2.0482432 15.0696585,2.06070309 C15.1700206,2.09363281 15.2635203,2.13279248 15.3604513,2.17284213 C15.416208,2.19242197 15.4676757,2.21823175 15.5114233,2.23781158 C15.5869093,2.2707413 15.6641109,2.30990096 15.7258722,2.34283068 C15.7893491,2.3757604 15.8502525,2.41225009 15.9034359,2.44161984 C15.9566192,2.47098959 15.9977934,2.50391931 16.0423988,2.53061908 C16.2366895,2.65610801 16.42133,2.7976168 16.5937871,2.95326813 L16.7620893,3.1135641 L16.7698094,3.12691399 L16.8874346,3.25173542 L16.8874346,3.25173542 L16.9979831,3.3832318 L17.0039876,3.39569169 C17.6508975,4.29033944 17.9988681,5.37684638 17.9999972,6.49001176 L17.9930259,6.76876289 L17.9930259,7.15590959 L18,7.15590959 L18,14.9101539 C18,18.291571 16.111588,19.9999833 12.3690987,19.9999833 L12.3690987,19.9999833 L5.6223176,19.9999833 C1.88841202,19.9999833 0,18.291571 0,14.9101539 L0,14.9101539 L0,7.15590959 L0.00676782204,7.15590959 L0.00676782204,6.77232286 Z M13.1158798,14.2462631 C12.6523605,14.2462631 12.2832618,14.6268939 12.2832618,15.0960433 C12.2918455,15.5651928 12.6609442,15.9458235 13.1158798,15.9458235 C13.5708155,15.9458235 13.9399142,15.5651928 13.9399142,15.0960433 C13.9399142,14.6268939 13.5708155,14.2462631 13.1158798,14.2462631 L13.1158798,14.2462631 Z M9.00429185,14.2374113 C8.54077253,14.2462631 8.17167382,14.6268939 8.17167382,15.0960433 C8.17167382,15.5651928 8.54935622,15.9458235 9.00429185,15.9458235 C9.45922747,15.9458235 9.82832618,15.5651928 9.82832618,15.0871915 C9.81974249,14.6268939 9.45922747,14.2462631 9.00429185,14.2374113 L9.00429185,14.2374113 Z M4.88412017,14.2374113 C4.42060086,14.2374113 4.05150215,14.6268939 4.06008584,15.0960433 C4.06008584,15.5651928 4.42918455,15.9458235 4.88412017,15.9458235 C5.33905579,15.9458235 5.70815451,15.556341 5.70815451,15.0871915 C5.70815451,14.618042 5.33905579,14.2374113 4.88412017,14.2374113 Z M13.1158798,10.6169935 C12.6523605,10.6169935 12.2918455,10.9976242 12.2918455,11.4667737 C12.2918455,11.9359232 12.6609442,12.3165539 13.1158798,12.3165539 C13.5708155,12.3165539 13.9399142,11.9359232 13.9399142,11.4667737 C13.9399142,10.9976242 13.5708155,10.6169935 13.1158798,10.6169935 Z M9.00429185,10.6081417 C8.54077253,10.6169935 8.17167382,10.9976242 8.17167382,11.4667737 C8.17167382,11.9359232 8.54935622,12.3165539 9.00429185,12.3165539 C9.45922747,12.3165539 9.82832618,11.9359232 9.82832618,11.4579219 C9.82832618,10.9976242 9.45922747,10.6169935 9.00429185,10.6081417 L9.00429185,10.6081417 Z M4.89270386,10.6081417 C4.42918455,10.6081417 4.06008584,10.9976242 4.06008584,11.4667737 C4.06008584,11.9359232 4.42918455,12.3165539 4.88412017,12.3165539 C5.34763948,12.3165539 5.7167382,11.9270713 5.70815451,11.4579219 C5.70815451,10.9887724 5.33905579,10.6081417 4.89270386,10.6081417 L4.89270386,10.6081417 Z"
                  className="color200E32 svgShape"
                />
              </svg>
            </div>
          </Link>
          <Link to="/joueur/parties">
            <div className="h-10 flex justify-center items-center">
              <svg
                className="h-8 w-6 fill-current text-white hover:text-afrik-red"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M20.4 46.9c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm23.2 0c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-2-4.3-4.3-4.3z"></path>
                <path d="M58.8 31.4c-4-6.4-8.4-7.7-11.4-7.7-1.5 0-2.5.4-2.5.4h-.2c-2.2.5-4.5.9-6.7 1.1H37.4v-1.6c0-1.1-.9-1.9-1.9-1.9h-1c.7-1.9 1-3.7.7-5.4-.1-.7-.3-1.4-.4-2-.3-1.4-.6-2.5-.3-3.8.4-1.5 1.5-3 3.4-4.6.3-.3.6-.7.6-1.1 0-.4-.1-.8-.3-1.2-.4-.3-.8-.6-1.3-.6-.4 0-.7.1-1 .4-2.5 2-3.9 4-4.5 6.3-.5 2-.1 3.8.3 5.4l.1.3c.1.5.2.9.3 1.4.2 1.5-.1 3.1-1.1 4.9h-2.4c-1.1 0-1.9.9-1.9 1.9v1.6H26.1c-2.2-.2-4.4-.6-6.7-1.1h-.1s-1-.4-2.5-.4c-3 0-7.4 1.3-11.4 7.8C1.6 37.9-.1 44.8.2 51.6c0 1 .2 2.4.5 3.8.5 1.9 1.9 3.9 3.5 4.8.8.5 1.8.8 3.1.8.8 0 1.7-.1 2.6-.3l.2-.1c1.1-.4 4-1.6 6.9-4.3l.3-.3-.3-.2c-1.4-1.1-2.3-2.8-2.3-4.6 0-3.2 2.6-5.7 5.7-5.7 2.1 0 4 1.2 5.1 3l.1.2h12.9l.1-.2c1-1.9 3-3 5.1-3 3.2 0 5.7 2.6 5.7 5.7 0 1.8-.9 3.5-2.3 4.6l-.4.2.3.3c3.1 2.9 6.2 4.1 7.2 4.4.9.2 1.8.3 2.6.3 1.2 0 2.3-.3 3.2-.8 1.6-.9 3.1-2.9 3.5-4.8.3-1.4.5-2.9.5-3.8.3-6.8-1.5-13.8-5.2-20.2zm-34.7 6c0 .2-.1.4-.2.5-.1.1-.3.2-.5.2h-3.3v3.3c0 .4-.3.7-.7.7h-4.5c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-3.3h-3.3c-.4 0-.7-.3-.7-.7v-4.5c0-.2.1-.4.2-.5.1-.1.3-.2.5-.2v-.3.3h3.3v-3.3c0-.4.3-.7.7-.7h4.5c.2 0 .4.1.5.2.1.1.2.3.2.5v3.3h3.3c.4 0 .7.3.7.7v4.5zm21.4-10.2c1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.2 2.8-2.8 2.8s-2.8-1.2-2.8-2.8c.1-1.6 1.3-2.8 2.8-2.8zm-5.2 10.7c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.6-1.2 2.8-2.8 2.8zm5.2 5.2c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8c0 1.6-1.2 2.8-2.8 2.8zm5.3-5.2c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8c-.1 1.6-1.3 2.8-2.8 2.8z"></path>
                <circle cx="50.8" cy="35.2" r="1.3"></circle>
                <circle cx="45.5" cy="40.4" r="1.3"></circle>
                <path d="M45.5 31.3c.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3zm-5.2 2.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3.1-.7-.5-1.3-1.3-1.3zm-21.7-.9v-3.3h-3.1v3.3c0 .4-.3.7-.7.7h-3.3v3.1h3.3c.2 0 .4.1.5.2.1.1.2.3.2.5v3.3h3.1v-3.3c0-.4.3-.7.7-.7h3.3v-3.1h-3.3c-.4 0-.7-.3-.7-.7z"></path>
              </svg>
            </div>
          </Link>
          <Link to="/joueur/classement">
            <div className="h-10 flex justify-center items-center">
              <svg
                className="h-8 w-6 fill-current text-white hover:text-afrik-red"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
              </svg>
            </div>
          </Link>
          <div className="absolute bottom-0 w-full p-5">
            <div className="group border-2 border-dashed border-afrik-red p-2 rounded-2xl">
              <div className="bg-afrik-red text-xl rounded-full px-3 py-1 flex justify-center items-center shadow-md shadow-afrik-red/50 group-hover:bg-white group-hover:text-afrik-red group-hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="h-6 w-4 fill-current text-white group-hover:text-afrik-red"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-[90%] ml-[10%] flex justify-start items-start space-x-3 p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">
              Bienvenue, {joueur.prenom} {joueur.nom}!
            </span>
            <span className="text-afrik-red text-opacity-45 text-lg">
              #{joueur.classement}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-gradient-to-l from-afrik-red via-afrik-red to-afrik-light-red rounded-3xl p-4 shadow-lg"
            >
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h2 className="text-2xl font-bold">{joueur.niveau}</h2>
                  <p className="text-sm text-white/70">
                    Représenté par la figure du vieillard sage, ce niveau
                    incarne la maîtrise, l'expérience et la sagesse. Les experts
                    sont des mentors et des leaders, capables d'analyser les
                    situations complexes et de transmettre leur savoir avec
                    clarté et perspicacité.
                  </p>
                </div>
                <img src={badgeImage} alt="Badge" className="h-48 rounded-lg" />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="bg-black bg-opacity-35 rounded-3xl p-4 text-center">
                Vous avez débloqué le niveau{" "}
                <span className="text-afrik-light-red font-bold">Expert</span>
              </div>
              <div className="bg-black bg-opacity-35 rounded-3xl p-4 text-center">
                Vous avez joué à{" "}
                <span className="text-afrik-red font-bold">{totaljouer}</span>{" "}
                partie au total !
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 grid grid-cols-1 grid-rows-2 gap-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-black bg-opacity-35 rounded-3xl p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">À venir</span>
                  <span className="text-afrik-red text-opacity-45 text-sm">
                    voir plus
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                      className="bg-black/50 rounded-3xl overflow-hidden group hover:border-dashed hover:border-2 hover:border-white/60"
                      onClick={() => handlePlayGame(plan.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={plan.miniature}
                        alt={plan.nom}
                        className="w-full h-32 object-cover rounded-t-3xl"
                      />
                      <div className="p-2 text-center font-semibold text-white/70 group-hover:text-white group-hover:bg-afrik-red transition duration-300">
                        {plan.nom}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gradient-to-r from-afrik-red/50 via-black/25 to-black/35 rounded-3xl p-4 grid grid-cols-2 items-center"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={dernierePartie.miniature}
                    alt={dernierePartie.nom}
                    className="h-20 rounded-lg"
                  />
                  <div>
                    <div className="font-bold">{dernierePartie.nom}</div>
                    <div className="text-sm text-white/70">
                      {dernierePartie.niveau}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-afrik-red text-opacity-45 font-semibold">
                    Score
                  </div>
                  <div className="text-2xl font-bold">
                    {dernierePartie.score}
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-black bg-opacity-35 rounded-3xl p-4 relative"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Mes statistiques</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-6 text-afrik-red"
                />
              </div>
              <div className="relative w-full h-64">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="border-dashed border-afrik-red/45 border-2 p-6 rounded-full text-center">
                    <div className="text-afrik-red/45 font-semibold text-lg">
                      Score total
                    </div>
                    <div className="text-4xl font-bold">{displayScore}</div>
                  </div>
                </div>
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-tr from-afrik-red via-afrik-cream to-afrik-purple backdrop-blur"
                  animate={{ rotate: 45 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-tr from-afrik-red/80 via-afrik-cream/80 to-afrik-purple/80 backdrop-blur"
                  animate={{ rotate: 12 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-tr from-afrik-red/40 via-afrik-cream/40 to-afrik-purple/40 backdrop-blur"
                  animate={{ rotate: -12 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-tr from-afrik-red/25 via-afrik-cream/25 to-afrik-purple/25 backdrop-blur"
                  animate={{ rotate: -45 }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-center">
                  <div className="bg-afrik-red rounded-full p-2">
                    <img src={statImage} alt="Stat" className="h-10" />
                  </div>
                  <div className="text-sm">{stat1}</div>
                </div>
                <div className="text-center">
                  <div className="bg-afrik-cream rounded-full p-2">
                    <img src={statImage} alt="Stat" className="h-10" />
                  </div>
                  <div className="text-sm">{stat2}</div>
                </div>
                <div className="text-center">
                  <div className="bg-afrik-purple rounded-full p-2">
                    <img src={statImage} alt="Stat" className="h-10" />
                  </div>
                  <div className="text-sm">{stat3}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="w-1/5 h-screen"
        >
          <div className="bg-black bg-opacity-35 py-4 shadow-inner rounded-full w-full text-white flex flex-col items-center space-y-4">
            <Link to="#">
              <div className="h-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="h-8 w-6 text-white hover:text-afrik-red"
                />
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-4">
              <Link to="#">
                <div className="bg-black/25 rounded-full p-4 flex justify-center items-center text-center text-lg">
                  D
                </div>
              </Link>
              <Link to="#">
                <div className="bg-black/25 rounded-full p-4 flex justify-center items-center text-center text-lg">
                  P
                </div>
              </Link>
              <Link to="#">
                <div className="bg-black/25 rounded-full p-4 flex justify-center items-center text-center text-lg">
                  P
                </div>
              </Link>
              <Link to="#">
                <div className="bg-black/25 rounded-full p-4 flex justify-center items-center text-center text-lg">
                  J
                </div>
              </Link>
              <Link to="#">
                <div className="pt-4 flex justify-center items-end text-center text-lg">
                  <FontAwesomeIcon icon={faChevronDown} className="h-6" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;