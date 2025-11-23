export type QuizDataType = {
  q: string;
  options: string[];
  answer: string;
};

export const quizData: QuizDataType[] = [
  {
    q: "What is the main purpose of a phishing attack?",
    options: [
      "To entertain users",
      "To steal personal information",
      "To improve internet speed",
      "To fix your device automatically",
    ],
    answer: "To steal personal information",
  },
  {
    q: "Which of the following is a common sign of a phishing link?",
    options: [
      "Short and simple address",
      "Begins with https://",
      "Strange or unfamiliar URL",
      "Found on a trusted website",
    ],
    answer: "Strange or unfamiliar URL",
  },
  {
    q: "A message says: 'Your account will be closed in 12 hours! Click here to secure it.'",
    options: [
      "Regular notification",
      "Friendly reminder",
      "Urgent threat used to cause panic",
      "Software update",
    ],
    answer: "Urgent threat used to cause panic",
  },
  {
    q: "Safe websites usually begin with:",
    options: ["http//", "www-only", "https://", "random letters"],
    answer: "https://",
  },
  {
    q: "Which should you NEVER share through a link?",
    options: [
      "Your nickname",
      "Your favorite food",
      "Your password or OTP",
      "Public holiday dates",
    ],
    answer: "Your password or OTP",
  },
  {
    q: "What should you do if you receive a suspicious message with a link?",
    options: [
      "Click it to check",
      "Reply for details",
      "Delete it and scan",
      "Forward to friends",
    ],
    answer: "Delete it and scan",
  },
  {
    q: "A URL shows 'paypa1-secure-login.com.' What is it?",
    options: [
      "New PayPal site",
      "Number '1' is normal",
      "A phishing site",
      "An advertisement",
    ],
    answer: "A phishing site",
  },
  {
    q: "Which type of phishing uses phone calls?",
    options: ["Smishing", "Vishing", "Email phishing", "Browser phishing"],
    answer: "Vishing",
  },
  {
    q: "You clicked a phishing link! First step?",
    options: ["Ignore it", "Turn off phone", "Change passwords", "Screenshot"],
    answer: "Change passwords",
  },
  {
    q: "Which is a good security practice?",
    options: [
      "Same password everywhere",
      "Click unknown links",
      "Enable 2FA",
      "Login via any link",
    ],
    answer: "Enable 2FA",
  },
];

export function shuffleArray(array: any[]) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function shuffleQuiz() {
  const newArray = shuffleArray(quizData);

  return newArray.map((item) => ({
    ...item,
    options: shuffleArray(item.options),
  }));
}
