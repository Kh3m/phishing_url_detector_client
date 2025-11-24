"use client";

import { useState } from "react";

const PhishingURLChecker = () => {
  const [url, setUrl] = useState("");

  return (
    <div>
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
    </div>
  );
};

export default PhishingURLChecker;
