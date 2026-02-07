import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const MockTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "Solve: 2x + 5 = 15",
      options: ["x = 3", "x = 5", "x = 7", "x = 10"],
      answer: "x = 5",
      explanation: "Subtract 5: 2x = 10, then divide by 2: x = 5"
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
      explanation: "12 × 12 = 144"
    },
    {
      question: "Convert 100°F to Celsius",
      options: ["37.8°C", "40°C", "37°C", "38°C"],
      answer: "37.8°C",
      explanation: "C = (F - 32) × 5/9 = (100 - 32) × 5/9 = 37.8°C"
    },
    {
      question: "Find the value of 3³",
      options: ["9", "18", "27", "36"],
      answer: "27",
      explanation: "3³ = 3 × 3 × 3 = 27"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
      answer: "Mitochondria",
      explanation: "Mitochondria generates most of the cell's supply of ATP"
    }
  ];

  useEffect(() => {
    let timer;
    if (testStarted && !testCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTestComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, testCompleted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    setTestStarted(true);
    setTestCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(600);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(selectedOption);
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      handleTestComplete();
    }
  };

  const handleTestComplete = () => {
    setTestCompleted(true);
    setTestStarted(false);
  };

  const resetTest = () => {
    setTestStarted(false);
    setTestCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(600);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (!testStarted && !testCompleted) {
    return (
      <div className="mock-test-intro">
        <section className="hero">
          <h1>📝 Live Mock Test</h1>
          <p>Test your knowledge with our timed mock tests and track your progress!</p>
          
          <Card className="text-center" style={{ maxWidth: '500px', margin: '40px auto' }}>
            <h3>📊 Test Details</h3>
            <div className="flex flex-center gap-15" style={{ marginTop: '20px' }}>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--neon-pink)' }}>
                  {questions.length}
                </p>
                <p>Questions</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--cyber-yellow)' }}>
                  10 min
                </p>
                <p>Time Limit</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--matrix-green)' }}>
                  Free
                </p>
                <p>Cost</p>
              </div>
            </div>
            
            <Button variant="primary" onClick={startTest} style={{ marginTop: '30px', width: '100%' }}>
              🚀 Start Test Now
            </Button>
          </Card>
        </section>
      </div>
    );
  }

  if (testCompleted) {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    return (
      <div className="mock-test-results">
        <section className="hero">
          <h1>🏆 Test Complete!</h1>
          
          <Card className="text-center" style={{ maxWidth: '500px', margin: '40px auto' }}>
            <h3>📊 Your Score</h3>
            <div className="score-display" style={{ justifyContent: 'center', marginTop: '20px' }}>
              <span>{score}</span> / {questions.length}
            </div>
            <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              {percentage >= 80 ? '🌟 Excellent!' : percentage >= 60 ? '👍 Good Job!' : '💪 Keep Practicing!'}
            </p>
            
            <div style={{ 
              background: 'rgba(0, 255, 65, 0.1)', 
              padding: '20px', 
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <p style={{ color: 'var(--matrix-green)', fontWeight: 'bold' }}>
                {percentage}% Score
              </p>
            </div>
            
            <div className="flex gap-15 flex-center">
              <Button variant="secondary" onClick={resetTest}>
                🔄 Try Again
              </Button>
              <Button variant="primary" onClick={startTest}>
                📝 New Test
              </Button>
            </div>
          </Card>
        </section>
      </div>
    );
  }

  return (
    <div className="mock-test-active">
      <div className="flex-between" style={{ padding: '20px 0', marginBottom: '20px' }}>
        <div className="timer" style={{ fontSize: '2rem' }}>
          ⏱️ {formatTime(timeLeft)}
        </div>
        <div className="filter-tag active">
          Question {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      <Card>
        <div className="question-box">
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
            {questions[currentQuestion].question}
          </p>
          
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`option-btn ${selectedAnswer === option ? 
                  (option === questions[currentQuestion].answer ? 'correct' : 'incorrect') : 
                  ''
                }`}
                style={{
                  background: selectedAnswer !== null && option === questions[currentQuestion].answer 
                    ? 'rgba(0, 255, 65, 0.3)' 
                    : selectedAnswer === option 
                    ? 'rgba(233, 69, 96, 0.3)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  border: selectedAnswer !== null && option === questions[currentQuestion].answer 
                    ? '2px solid var(--matrix-green)' 
                    : selectedAnswer === option 
                    ? '2px solid var(--neon-pink)' 
                    : '2px solid transparent'
                }}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div style={{ 
              marginTop: '20px', 
              padding: '20px', 
              background: 'rgba(83, 52, 131, 0.3)', 
              borderRadius: '10px',
              border: '1px solid var(--neon-purple)'
            }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>💡 Explanation:</p>
              <p>{questions[currentQuestion].explanation}</p>
              <Button 
                variant="primary" 
                onClick={nextQuestion}
                style={{ marginTop: '20px', width: '100%' }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results →'}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default MockTest;
