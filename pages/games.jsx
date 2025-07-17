import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function GamesPage() {
  // Fetch questions from API
  const { data: questions, error } = useSWR('/api/questions', fetcher);
  
  // Game state management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Handle answer selection
  const handleAnswer = (index) => {
    if (isAnswered) return; // Prevent multiple answers
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    // Check if answer is correct
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    // Move to next question after 1.5 seconds
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  // Restart game function
  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      {/* Navigation */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="text-white hover:text-pink-300 transition">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-8">
          Katsura Knowledge Quiz
        </h1>

        {/* Error State */}
        {error && (
          <p className="text-white text-xl">Error loading quiz</p>
        )}

        {/* Loading State */}
        {!questions && !error && (
          <p className="text-white text-xl animate-pulse">Loading questions...</p>
        )}

        {/* Game Results Screen */}
        {showResult && questions && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Quiz Complete!</h2>
            <p className="text-2xl text-pink-200 mb-4">
              Your Score: {score} / {questions.length}
            </p>
            <p className="text-xl text-white mb-8">
              {score === questions.length ? "Perfect! Katsura would be proud!" :
               score >= questions.length / 2 ? "Good job! You know your Katsura!" :
               "Zura janai, study more da!"}
            </p>
            <button
              onClick={restartGame}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Quiz Game Screen */}
        {questions && !showResult && questions.length > 0 && (
          <div className="max-w-4xl w-full">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-white mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-pink-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h2 className="text-2xl text-white font-bold mb-6">
                {questions[currentQuestion].text}
              </h2>

              {/* Answer Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={`
                      w-full p-4 rounded-lg text-left transition-all duration-300
                      ${!isAnswered ? 'bg-white/10 hover:bg-white/20 text-white hover:scale-105' : ''}
                      ${isAnswered && index === questions[currentQuestion].answer ? 'bg-green-500 text-white' : ''}
                      ${isAnswered && index === selectedAnswer && index !== questions[currentQuestion].answer ? 'bg-red-500 text-white' : ''}
                      ${isAnswered && index !== selectedAnswer && index !== questions[currentQuestion].answer ? 'bg-white/10 text-white/50' : ''}
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {questions && questions.length === 0 && (
          <p className="text-white text-xl">No questions available</p>
        )}
      </div>
    </div>
  );
}