import React from "react";
import { useNavigate } from "react-router-dom";
import QuizTemplate from "./QuizTemplate";

const questions = [
  {
    question: "Quelle est la capitale du Kenya ?",
    options: ["Nairobi", "Accra", "Lagos", "Pretoria"],
    correct: "Nairobi",
  },
  {
    question: "Quel fleuve est le plus long d'Afrique ?",
    options: ["Nil", "Congo", "Niger", "Zambèze"],
    correct: "Nil",
  },
  {
    question: "Quel pays africain est connu pour les pyramides ?",
    options: ["Égypte", "Soudan", "Maroc", "Algérie"],
    correct: "Égypte",
  },
  {
    question: "Quel est le désert le plus vaste d’Afrique ?",
    options: ["Sahara", "Kalahari", "Namib", "Danakil"],
    correct: "Sahara",
  },
  {
    question: "Quelle langue est la plus parlée en Afrique ?",
    options: ["Swahili", "Arabe", "Français", "Hausa"],
    correct: "Swahili",
  },
];

export default function CultureGeneraleAfricaine() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/dashboard-joueur");
  };

  return (
    <QuizTemplate
      questions={questions}
      title="Culture Générale Africaine"
      onFinish={handleFinish}
    />
  );
}
