import bgImage from '../assets/img/7.png';

function Welcome() {
  return (
    <div
      className="flex-col mt-8 justify-center items-center bg-contain bg-no-repeat bg-right w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center w-[70%] justify-center h-screen space-y-2">
        <div className="space-y-14 py-20">
          <div className="text-6xl font-bold text-[#722714] w-full flex justify-start ml-8 items-center">
            Bienvenue sur AfriKulture
          </div>
          <div className="relative font-bold text-[#722714] w-full flex justify-center items-center">
            <p className="text-[#454d26] text-lg text-center">
              la plateforme ultime pour découvrir la richesse culturelle de l'Afrique à travers des jeux de culture générale captivants. Plongez dans un voyage passionnant à travers les traditions, les langues, l'histoire et les coutumes variées de tout le continent africain.
            </p>
          </div>
        </div>
        <a
          className="bg-[#e59b2e] ml-20 rounded-full p-5 text-red-900 font-bold animate-pulse relative shadow-lg"
          href="#"
        >
          <div className="flex justify-center w-full items-center">
            Découvrir
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e59b2e] opacity-75"></span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Welcome;