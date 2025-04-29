function Jeux() {
    // Mock data for games (replace with API call in production)
    const games = [
      {
        id: 1,
        nom: 'Culture Africaine',
        description: 'Testez vos connaissances sur les traditions, langues et coutumes africaines.',
        domaine: 'Culture',
        dateDebut: '2023-01-01',
        miniature: '/src/assets/img/culture.png', // Replace with actual image
        couleurFond: '#722714',
      },
      {
        id: 2,
        nom: 'Art Africain',
        description: 'Découvrez les chefs-d’œuvre artistiques et les mouvements culturels d’Afrique.',
        domaine: 'Art',
        dateDebut: '2023-02-15',
        miniature: '/src/assets/img/art.png', // Replace with actual image
        couleurFond: '#e59b2e',
      },
      {
        id: 3,
        nom: 'Géographie Africaine',
        description: 'Explorez les paysages, capitales et merveilles naturelles du continent.',
        domaine: 'Géographie',
        dateDebut: '2023-03-10',
        miniature: '/src/assets/img/geography.png', // Replace with actual image
        couleurFond: '#454d26',
      },
      {
        id: 4,
        nom: 'Histoire de l’Afrique',
        description: 'Plongez dans les événements marquants et les figures historiques africaines.',
        domaine: 'Histoire',
        dateDebut: '2023-04-20',
        miniature: '/src/assets/img/history.png', // Replace with actual image
        couleurFond: '#bc2510',
      },
    ];
  
    return (
      <div id="jeux" className="h-auto bg-white">
        <div className="flex flex-col justify-center items-center pt-28 pb-16">
          <div className="flex flex-col justify-center items-center w-11/12 space-y-5 text-center">
            <span className="text-5xl text-red-900 font-bold">Nos Jeux</span>
            <p className="text-lg text-gray-700">
              Votre passerelle vers une immersion enrichissante dans la culture générale africaine. Plongez dans un monde
              fascinant où l'apprentissage devient jeu, et où chaque question vous rapproche un peu plus des trésors cachés
              du continent.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mt-10">
            {games.map((game) => (
              <div
                key={game.id}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                style={{ backgroundColor: game.couleurFond }}
              >
                <div className="relative">
                  <img src={game.miniature} alt={game.nom} className="w-full h-48 object-cover" />
                  <div className="absolute top-0 left-0 bg-[#e59b2e] text-white text-sm font-semibold px-3 py-1 rounded-br-lg">
                    {game.domaine}
                  </div>
                </div>
                <div className="p-5 text-white">
                  <h3 className="text-2xl font-bold mb-2">{game.nom}</h3>
                  <p className="text-sm opacity-90 mb-4">{game.description}</p>
                  <p className="text-xs mb-4">Disponible depuis : {game.dateDebut}</p>
                  <a
                    href={`/effectuer/${game.id}`}
                    className="inline-block bg-white text-[#722714] font-semibold rounded-full px-6 py-2 hover:bg-[#722714] hover:text-white transition duration-300"
                  >
                    Jouer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Jeux;