import Wrapper from "../Wrapper";

const guideSections = [
  {
    title: "1. What is Phishing?",
    content: `Phishing is a trick used by scammers to make you click fake links,
      reveal your password, send money, or install harmful software.
      They pretend to be trusted people or companies like your bank, school, or delivery service to fool you.`,
  },
  {
    title: "2. Common Signs of a Phishing Link",
    listType: "ol",
    items: [
      "Strange or Unknown Sender",
      "Misspellings or Weird Grammar",
      "Suspicious Link Address",
      "Urgent or Threatening Messages",
      "Too Good to Be True",
    ],
  },
  {
    title: "3. Types of Phishing Attacks",
    listType: "ol",
    items: [
      "Email Phishing",
      "SMS Phishing (Smishing)",
      "Social Media Phishing",
      "Website Phishing",
      "Voice Phishing (Vishing)",
    ],
  },
  {
    title: "4. How to Identify a Safe vs. Fake Link",
    listType: "ul",
    items: [
      <>
        Safe links start with <code>https://</code>
      </>,
      "Correct vs Fake domains",
      "Avoid long or strange URLs",
    ],
  },
  {
    title: "5. What Scammers Commonly Ask For",
    content:
      "Never share passwords, ATM PIN, bank details, OTP, BVN/SSN/Aadhaar, private photos, or payment info.",
  },
  {
    title: "6. How to Stay Safe Online",
    listType: "ul",
    items: [
      "Check the sender",
      "Don’t click unknown links",
      "Use strong passwords",
      "Enable 2FA",
      "Update devices",
      "Use official websites/apps",
    ],
  },
  {
    title: "7. What to Do If You Think a Link Is Phishing",
    listType: "ul",
    items: [
      "Do not click",
      "Do not reply",
      "Delete message",
      "Scan with phishing detector",
      "If clicked: change passwords, enable 2FA, check bank activity, report",
    ],
  },
  {
    title: "8. Examples of Phishing Messages",
    content: `Fake delivery: “Your package is waiting...”. Fake bank alert: “Suspicious activity...”. Fake social media: “You violated our policy...”.`,
  },
  {
    title: "Golden Rule",
    content: "If something feels strange, don’t click and check first.",
  },
];

const PhishingCompleteGuide = () => {
  return (
    <Wrapper>
      <div className="py-12 mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Phishing Awareness Full Guide
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {guideSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              {section.content && (
                <p className="text-gray-700 mb-3">{section.content}</p>
              )}

              {section.items && section.listType === "ul" && (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.items && section.listType === "ol" && (
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA to quiz */}
        <div className="text-center mt-10">
          <a
            href="/quiz"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors"
          >
            Take the Phishing Quiz
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default PhishingCompleteGuide;
