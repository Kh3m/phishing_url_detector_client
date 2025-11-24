"use client";

import { useEffect, useState } from "react";
import { QuizDataType, shuffleQuiz } from "../../data/quiz";

export default function PhishingQuiz() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState<QuizDataType[]>([]);

  useEffect(() => {
    // initialize shuffled quiz once on mount
    const shuffled = shuffleQuiz();
    setQuiz(shuffled);
  }, []);

  const handleSubmit = () => {
    if (selected === null) return; // prevent skipping

    // Compare selected option index with the correct answer index
    if (quiz[quizIndex].options[selected] === quiz[quizIndex].answer) {
      setScore((s) => s + 1);
    }

    // move to next question
    setSelected(null);
    setQuizIndex((idx) => idx + 1);
  };

  const handleRestart = () => {
    const shuffled = shuffleQuiz();
    setQuiz(shuffled);
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      {/* Quiz */}
      <div className="p-6 rounded-2xl shadow bg-white">
        <h2 className="text-2xl font-bold mb-4">Phishing Awareness Quiz</h2>

        {quiz.length === 0 ? (
          <p>Loading quiz...</p>
        ) : quizIndex < quiz.length ? (
          <div>
            <p className="font-semibold">{quiz[quizIndex].q}</p>
            <div className="mt-3 space-y-2">
              {(quiz[quizIndex].options as string[]).map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)} // <-- set selected to option index
                  className={`w-full p-3 rounded-xl border text-left ${
                    selected === i
                      ? "bg-blue-100 border-blue-300"
                      : "bg-gray-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSubmit}
                className="flex-1 p-3 bg-green-600 text-white rounded-xl"
              >
                Next
              </button>

              <button
                onClick={() => {
                  // let user skip or quit — optional
                  setSelected(null);
                }}
                className="p-3 border rounded-xl"
              >
                Clear
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xl font-bold">
              Score: {score} / {quiz.length} (
              {Math.round((score / quiz.length) * 100)}%)
            </p>

            {/* Nice pass/fail UI */}
            {score / quiz.length >= 0.5 ? (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                <h3 className="text-lg font-semibold">
                  Well done! You passed 🎉
                </h3>
                <p>
                  Keep learning, every click counts toward staying safe online.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                <h3 className="text-lg font-semibold">
                  Almost there.. Try again.
                </h3>
                <p>
                  Review the guide and retake the quiz to improve your score.
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleRestart}
                className="p-3 bg-blue-600 text-white rounded-xl"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
