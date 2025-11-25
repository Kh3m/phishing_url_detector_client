import { useState } from "react";

const PhishingScanner = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    confidence: number;
    url: string;
  } | null>(null);
  const [error, setError] = useState("");

  const scanUrl = async () => {
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scan/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) throw new Error("Failed to scan URL");

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Something went wrong while scanning the URL.");
    } finally {
      setLoading(false);
    }
  };

  const getStatus = (confidence: number) => {
    if (confidence >= 0.7)
      return { label: "⚠️ Definitely Phishing", color: "red" };
    if (confidence >= 0.4)
      return { label: "⚠️ Possibly Phishing", color: "yellow" };
    return { label: "✅ Safe", color: "green" };
  };

  return (
    <section id="scanner" className="mx-auto max-w-2xl">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-2xl font-bold mb-3">Phishing URL Scanner</h3>
        <p className="text-sm text-gray-600 mb-4">
          Paste a URL to check if it looks suspicious. This tool uses an
          ML-powered phishing detector.
        </p>

        <div className="flex gap-3 flex-col lg:flex-row">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/suspicious"
            className="flex-1 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={scanUrl}
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Scanning..." : "Scan"}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 rounded-xl bg-red-100 text-red-700">
            {error}
          </div>
        )}

        {result && (
          <div
            className={`mt-4 p-4 rounded-xl border ${
              getStatus(result.confidence).color === "red"
                ? "bg-red-50 border-red-300 text-red-700"
                : getStatus(result.confidence).color === "yellow"
                ? "bg-yellow-50 border-yellow-300 text-yellow-700"
                : "bg-green-50 border-green-300 text-green-700"
            }`}
          >
            <h4 className="font-bold text-lg mb-1">
              {getStatus(result.confidence).label}
            </h4>

            <p className="text-sm">
              <strong>URL:</strong> {result.url}
            </p>

            <p className="text-sm">
              <strong>Confidence:</strong>{" "}
              {(result.confidence * 100).toFixed(1)}%
            </p>

            <p className="text-xs mt-2 text-gray-500">
              {getStatus(result.confidence).color === "red"
                ? "This link shows characteristics commonly used in phishing attacks."
                : getStatus(result.confidence).color === "yellow"
                ? "This link may be suspicious. Exercise caution before interacting."
                : "This link appears safe based on the model’s analysis."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhishingScanner;
