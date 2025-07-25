import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

// Hardcoded Katsura-themed questions as fallback
const katsuraQuestions = [
  {
    id: 1,
    text: "You're at a ramen shop and someone calls you 'Zura'. What do you do?",
    options: [
      "Politely correct them and continue eating",
      "Dramatically slam the table and yell 'ZURA JANAI, KATSURA DA!' then leave without paying",
      "Ignore them completely",
      "Thank them for recognizing you"
    ],
    answer: 1
  },
  {
    id: 2,
    text: "The Shinsengumi are chasing you down the street. Your escape plan?",
    options: [
      "Fight them head-on like a true samurai",
      "Hide in a trash can",
      "Put on a fake mustache and walk past them confidently",
      "Call Elizabeth to pick you up in a taxi"
    ],
    answer: 2
  },
  {
    id: 3,
    text: "Elizabeth hasn't shown up for work in 3 days. You:",
    options: [
      "File a missing person report",
      "Assume they're on vacation and hire a temporary replacement",
      "Break down crying and put up 'Missing: My Best Friend' posters everywhere",
      "Check if they left a sign"
    ],
    answer: 2
  },
  {
    id: 4,
    text: "You need to infiltrate a government building. Your disguise of choice?",
    options: [
      "A janitor with a mop",
      "An overly dramatic space captain named Captain Katsura",
      "A regular businessman",
      "Just wear sunglasses"
    ],
    answer: 1
  },
  {
    id: 5,
    text: "Someone asks about your terrorist activities. You respond:",
    options: [
      "I'm not a terrorist, I'm a patriot!",
      "What terrorist activities?",
      "ZURA JANAI, KATSURA DA! Wait, that's not what you asked...",
      "Would you like to hear about our revolution instead?"
    ],
    answer: 2
  },
  {
    id: 6,
    text: "You're giving a serious revolutionary speech when a cat walks by. You:",
    options: [
      "Continue the speech professionally",
      "Stop mid-sentence to pet the cat while making baby talk",
      "Incorporate the cat into your speech as a symbol of freedom",
      "Ignore it completely"
    ],
    answer: 1
  },
  {
    id: 7,
    text: "Your rental spaceship is due back today but you're nowhere near the return location. You:",
    options: [
      "Call and extend the rental",
      "Return it late and pay the fee",
      "Abandon it and assume a new identity",
      "Paint it a different color and claim it's a different ship"
    ],
    answer: 2
  },
  {
    id: 8,
    text: "You run into Gintoki on the street. Your greeting:",
    options: [
      "Yo, Gintoki!",
      "Gintoki! Want to join the revolution?",
      "Pretend you don't see him and walk into a pole",
      "Challenge him to a duel immediately"
    ],
    answer: 2
  },
  {
    id: 9,
    text: "Elizabeth suggests you get a real job. Your response?",
    options: [
      "But being a revolutionary IS a real job!",
      "Hold up a sign that says 'Never!'",
      "Consider it seriously for 0.5 seconds then laugh",
      "Dramatically faint"
    ],
    answer: 0
  },
  {
    id: 10,
    text: "You're at a costume party. Everyone expects you to dress up. You come as:",
    options: [
      "Yourself, because you're already ridiculous enough",
      "A giant Elizabeth costume",
      "Zura (then spend the whole night correcting people)",
      "An ill-fitting Mario costume while insisting you're 'Katsurio'"
    ],
    answer: 3
  },
  {
    id: 11,
    text: "The revolution needs funding. Your fundraising idea?",
    options: [
      "A bake sale with Elizabeth-shaped cookies",
      "Rob a bank (for the revolution, of course)",
      "Start a rap career as 'DJ Zura' (KATSURA DA!)",
      "Sell 'Katsura Kotaro' action figures that nobody wants"
    ],
    answer: 2
  },
  {
    id: 12,
    text: "You're caught in an awkward situation. Your escape phrase?",
    options: [
      "ZURA JANAI, KATSURA DA! *runs away*",
      "Elizabeth, use Smokescreen!",
      "This isn't what it looks like! It's for the revolution!",
      "I AM CAPTAIN KATSURA! *dramatic pose and exit*"
    ],
    answer: 0
  },
  {
    id: 13,
    text: "Someone compliments your long, silky hair. You:",
    options: [
      "Thank them and share your hair care routine",
      "Dramatically flip your hair and say 'It's the hair of justice!'",
      "Suspect they're a government spy trying to get close to you",
      "Offer to let them touch it for 500 yen"
    ],
    answer: 1
  },
  {
    id: 14,
    text: "You need to write a love letter. You sign it as:",
    options: [
      "Your devoted Katsura ❤️",
      "The Phantom of Love (P.S. ZURA JANAI, KATSURA DA!)",
      "K.K. (Mysterious Revolutionary)",
      "Donald Zuramp"
    ],
    answer: 1
  },
  {
    id: 15,
    text: "You're ordering pizza. The delivery person asks for a name. You give:",
    options: [
      "Katsura Kotaro",
      "Not Zura",
      "Captain Katsura of the Space Pirates",
      "Elizabeth's Human"
    ],
    answer: 2
  }
];

export default function GamesPage() {
  // Fetch questions from API with fallback to hardcoded questions
  const { data: apiQuestions, error } = useSWR('/api/questions', fetcher);
  const questions = apiQuestions && apiQuestions.length > 0 ? apiQuestions : katsuraQuestions;
  
  // Game state management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showReaction, setShowReaction] = useState(false);

  // Katsura's reactions to answers
  const getReaction = (isCorrect) => {
    if (isCorrect) {
      const correctReactions = [
        "Excellent! You truly understand our way!",
        "Peaches, you got it right! Good job!",
        "Elizabeth would be proud!",
        "You're ready to join the Joi rebels!",
        "That's exactly what I would do!"
      ];
      return correctReactions[Math.floor(Math.random() * correctReactions.length)];
    } else {
      const wrongReactions = [
        "WRONG ANSWER, but don't worry I trust you!",
        "That's not the way of true samurai!",
        "Elizabeth is shaking head in disappointment.",
        "The revolution will need you after it is finished.",
        "Try thinking more dramatically next time!"
      ];
      return wrongReactions[Math.floor(Math.random() * wrongReactions.length)];
    }
  };

  // Handle answer selection
  const handleAnswer = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    setShowReaction(true);
    
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowReaction(false);
      } else {
        setShowResult(true);
      }
    }, 2500);
  };

  // Restart game function
  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowReaction(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      {/* Navigation */}
      <nav className="p-6 backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white hover:text-pink-300 transition">
            ← Back to Home
          </a>
          <div className="text-white text-lg">
            🎮 What Would Katsura Do?
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4 text-center animate-fadeIn">
          ZURA JANAI, QUIZ DA!
        </h1>
        <p className="text-pink-200 text-xl mb-8 text-center">
          Test your knowledge of what Katsura would do in these situations!
        </p>

        {/* Error State */}
        {error && (
          <p className="text-white text-xl">Using offline questions! Let's play!</p>
        )}

        {/* Game Results Screen */}
        {showResult && questions && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-12 text-center max-w-2xl animate-fadeIn">
            <h2 className="text-4xl font-bold text-white mb-6">Quiz Complete!</h2>
            <div className="text-6xl mb-6">
              {score === questions.length ? "🎉" : score >= questions.length / 2 ? "👍" : "😅"}
            </div>
            <p className="text-3xl text-pink-200 mb-4">
              Your Score: {score} / {questions.length}
            </p>
            <p className="text-xl text-white mb-8">
              {score === questions.length ? "Perfect! You ARE ONE OF US!" :
               score >= questions.length * 0.8 ? "Excellent! Elizabeth approves!" :
               score >= questions.length * 0.6 ? "Good job! You understand the way of Katsura!" :
               score >= questions.length * 0.4 ? "Not bad, but more revolution needed!" :
               "Don't worry, even Katsura has off days!"}
            </p>
            <button
              onClick={restartGame}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 text-lg"
            >
              Try Again! (For the Revolution!)
            </button>
          </div>
        )}

        {/* Quiz Game Screen */}
        {questions && !showResult && questions.length > 0 && (
          <div className="max-w-4xl w-full">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-white mb-2">
                <span className="text-lg">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-lg">Score: {score}</span>
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