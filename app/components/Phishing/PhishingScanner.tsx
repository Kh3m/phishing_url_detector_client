const PhishingScanner = () => {
  return (
    <section id="scanner" className="mx-auto ">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-2xl font-bold mb-3">Phishing URL Scanner</h3>
        <p className="text-sm text-gray-600 mb-4">
          Paste a URL to check if it looks suspicious. This demo uses a
          lightweight ML-backed detector.
        </p>

        <div className="flex gap-3">
          <input
            id="url-input"
            placeholder="https://example.com/suspicious"
            className="flex-1 p-3 border rounded-xl"
          />
          <button
            id="scan-btn"
            className="px-5 py-3 bg-blue-600 text-white rounded-xl"
          >
            Scan
          </button>
        </div>

        <div id="scan-result" className="mt-4 text-sm text-gray-700" />
      </div>
    </section>
  );
};

export default PhishingScanner;
