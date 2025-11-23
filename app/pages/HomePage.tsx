"use client";

import { useEffect, useState } from "react";
import { quizData, QuizDataType, shuffleQuiz } from "../data/quiz";

export default function PhishingAwarenessApp() {
  const [url, setUrl] = useState("");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const [quiz, setQuiz] = useState<QuizDataType | any>([]);

  const handleSubmit = () => {
    if (selected === null) return; // prevent skipping
    if (selected === quiz[quizIndex].answer) setScore(score + 1);
    setSelected(null);
    setQuizIndex(quizIndex + 1);
  };

  useEffect(() => {
    setQuiz(shuffleQuiz());
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      {/* URL Checker */}
      <div className="p-6 rounded-2xl shadow bg-white">
        <h2 className="text-2xl font-bold mb-2">Phishing URL Checker</h2>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a URL to scan"
          className="w-full p-3 border rounded-xl"
        />
        <button className="mt-4 w-full p-3 bg-blue-600 text-white rounded-xl">
          Scan URL
        </button>
      </div>

      {/* Awareness Guide */}
      <div className="p-6 rounded-2xl shadow bg-white space-y-4">
        <h2 className="text-2xl font-bold">Phishing Awareness Simple Guide</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Phishing is a scam technique used to steal information or trick
            users.
          </li>
          <li>Common signs: strange links, urgent messages, misspellings.</li>
          <li>Types: Email, SMS, Social media, Website, Voice calls.</li>
          <li>Safe links start with https:// and proper domains.</li>
          <li>Never share OTP, PIN, bank details, or private info.</li>
          <li>Stay safe: verify senders, avoid unknown links, enable 2FA.</li>
          <li>If unsure, do not click — always check first.</li>
        </ul>
      </div>

      {/* Quiz */}
      <div className="p-6 rounded-2xl shadow bg-white">
        <h2 className="text-2xl font-bold mb-4">Phishing Awareness Quiz</h2>
        {quizIndex < quiz.length ? (
          <div>
            <p className="font-semibold">{quiz[quizIndex].q}</p>
            <div className="mt-3 space-y-2">
              {(quiz[quizIndex].options as string[]).map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(quiz[i].answer)}
                  className={`w-full p-3 rounded-xl border ${
                    selected === quiz[i].answer ? "bg-blue-100" : "bg-gray-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 p-3 bg-green-600 text-white rounded-xl w-full"
            >
              Next
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xl font-bold">
              Your Score: {score} / {quiz.length}
            </p>

            <button
              onClick={() => {
                shuffleQuiz();
                setQuizIndex(0);
              }}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
