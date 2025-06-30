import React from "react";
import { useNavigate } from "react-router-dom";
import QuizTemplate from "./QuizTemplate";

const questions = [
  {
    question: "Quel animal est surnommé 'le roi de la savane' ?",
    options: ["Lion", "Léopard", "Hyène", "Éléphant"],
    correct: "Lion",
  },
  {
    question: "Quel animal a le cou le plus long ?",
    options: ["Girafe", "Autruche", "Zèbre", "Chameau"],
    correct: "Girafe",
  },
  {
    question: "Quel est le plus rapide ?",
    options: ["Guépard", "Antilope", "Zèbre", "Lion"],
    correct: "Guépard",
  },
  {
    question: "Quel animal vit en harem dans la savane ?",
    options: ["Zèbre", "Lion", "Rhinocéros", "Hippopotame"],
    correct: "Zèbre",
  },
  {
    question: "Quel oiseau ne vole pas mais court très vite en Afrique ?",
    options: ["Autruche", "Flamant rose", "Pélican", "Cigogne"],
    correct: "Autruche",
  },
];

export default function Safari() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/dashboard-joueur");
  };

  return <QuizTemplate questions={questions} title="Safari" onFinish={handleFinish} />;
}
