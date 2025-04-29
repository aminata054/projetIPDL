import bgImage from '../assets/img/african-pattern.png';

function Apropos() {
  return (
    <div
      id="apropos"
      className="bg-no-repeat bg-bottom bg-fixed bg-cover w-full flex justify-center items-center text-white shadow-inner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex px-24 py-28 flex-col justify-center items-center backdrop-filter backdrop-blur-lg h-full">
        <div className="flex flex-col justify-center items-center w-11/12 space-y-5">
          <span className="text-5xl font-bold">À propos</span>
          <p className="text-md opacity-75 font-semibold italic">
            Chez AfriKulture, nous croyons en la puissance de l'éducation ludique. Notre mission est de promouvoir la connaissance et la compréhension de l'Afrique à travers des jeux interactifs et éducatifs. Que vous soyez un passionné d'histoire, un amateur de géographie ou simplement curieux de découvrir de nouveaux faits fascinants, AfriKulture vous offre une expérience enrichissante et divertissante.
            <br />
            Nos jeux sont conçus pour tous les niveaux et adaptés à tous les âges, afin que chacun puisse participer et s'amuser tout en enrichissant ses connaissances sur l'Afrique. Avec des questions variées et stimulantes, vous pouvez défier vos amis, tester vos connaissances et devenir un véritable expert de la culture africaine.
            <br />
            Rejoignez-nous sur AfriKulture pour explorer, apprendre et triompher dans le monde captivant de la culture générale africaine. Ensemble, embrassons la diversité, célébrons l'histoire et valorisons le savoir de ce continent riche et vibrant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Apropos;