import React from "react";
import { useParams } from "react-router-dom";
import CultureGeneraleAfricaine from "./CultureGeneraleAfricaine";
import Nature from "./Nature";
import Safari from "./Safari";

const EffectuerGame = () => {
  const { gameId } = useParams();

  // Convertir gameId en number pour sécurité
  const id = Number(gameId);

  switch (id) {
    case 1:
      return <CultureGeneraleAfricaine />;
    case 2:
      return <Nature />;
    case 3:
      return <Safari />;
    default:
      return <div>Jeu non trouvé pour l'ID : {gameId}</div>;
  }
};

export default EffectuerGame;
