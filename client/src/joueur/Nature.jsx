import QuizTemplate from "./QuizTemplate";
import React from "react";

const questions = [
  {
    question: "Quel est le plus grand arbre du monde ?",
    options: ["Séquoia", "Baobab", "Chêne", "Acacia"],
    correct: "Séquoia",
  },
  {
    question: "Quelle plante est carnivore ?",
    options: ["Orchidée", "Violette", "Dionée", "Tulipe"],
    correct: "Dionée",
  },
  {
    question: "Quel animal est considéré comme un ingénieur de la nature ?",
    options: ["Castor", "Fourmi", "Éléphant", "Aigle"],
    correct: "Castor",
  },
  {
    question: "Quel gaz est absorbé par les arbres ?",
    options: ["CO2", "Oxygène", "Azote", "Hélium"],
    correct: "CO2",
  },
  {
    question: "Quelle mer est en train de disparaître ?",
    options: ["Mer Morte", "Mer Caspienne", "Mer d'Aral", "Mer Rouge"],
    correct: "Mer d'Aral",
  },
];

export default function Nature() {
  return <QuizTemplate questions={questions} title="Quiz Nature" />;
}
