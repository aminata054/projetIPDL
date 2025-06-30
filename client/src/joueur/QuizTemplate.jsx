import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const QuizTemplate = ({ questions, title, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timer, setTimer] = useState(10);

  const correctSound = useRef(null);
  const wrongSound = useRef(null);

  useEffect(() => {
    let countdown;
    if (!selectedOption && !quizFinished) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setSelectedOption("⏱ Temps écoulé");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [currentQuestion, selectedOption, quizFinished]);

  const handleAnswer = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      if (option === questions[currentQuestion].correct) {
        correctSound.current.play();
        setScore((prev) => prev + 1);
      } else {
        wrongSound.current.play();
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setTimer(10);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
    setTimer(10);
  };

  const progress =
    ((currentQuestion + (selectedOption ? 1 : 0)) / questions.length) * 100;

  const current = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      <audio ref={correctSound} src="/sounds/correct.mp3" />
      <audio ref={wrongSound} src="/sounds/wrong.mp3" />

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-center text-yellow-300 mb-4">
          {title}
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-yellow-400 h-3 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {!quizFinished ? (
          <div className="bg-white/5 p-6 rounded-2xl shadow-lg relative">
            <div className="absolute top-4 right-6 text-lg font-bold text-red-400">
              ⏱ {timer}s
            </div>
            <h2 className="text-xl font-bold mb-4 text-yellow-200">
              {current.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.options.map((option, idx) => {
                const isCorrect = option === current.correct;
                const isSelected = selectedOption === option;

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedOption !== null}
                    className={`px-4 py-2 rounded-lg font-medium transition duration-300
                      ${
                        selectedOption
                          ? isCorrect
                            ? "bg-green-600 text-white"
                            : isSelected
                            ? "bg-red-600 text-white"
                            : "bg-gray-700 text-gray-300"
                          : "bg-gray-800 hover:bg-yellow-500"
                      }
                    `}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {selectedOption && (
              <div className="text-center mt-6">
                <button
                  onClick={nextQuestion}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full transition shadow-lg"
                >
                  {currentQuestion === questions.length - 1 ? "Terminer" : "Suivant"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-green-400">Quiz Terminé !</h2>
            <p className="text-xl mt-4">
              Votre score : <span className="font-bold">{score}</span> / {questions.length}
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={restartQuiz}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full"
              >
                Rejouer
              </button>
              {onFinish && (
                <button
                  onClick={onFinish}
                  className="bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded-full"
                >
                  Retour au Dashboard
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizTemplate;
