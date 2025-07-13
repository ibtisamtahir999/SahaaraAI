import React, { useState } from "react";
import { AlertTriangle, Loader2, Stethoscope } from "lucide-react";
import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import HowItWorks from "./components/landing/HowItWorks";
import SymptomSection from "./components/SymptomSection";
import GPTResponseCard from "./components/GPTResponseCard";
import { askGPT } from "./utils/gptClient";
import Navbar from "./components/landing/Navbar";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import LanguageModal from "./components/LanguageModal";

export default function App() {
  const [response, setResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  

  const handleSubmit = async (symptoms: string) => {
    if (!symptoms.trim()) {
      setError(t("pleaseEnterSymptoms"));
      return;
    }

    setIsProcessing(true);
    setError(null);

    const prompt = `
You are SahaaraAI, a multilingual medical assistant.
Analyze the following patient symptoms:

"""${symptoms}"""

Reply in this format:
- Translation:
- Summary:
- Triage Level (high / medium / low):
- Priority color (red / yellow / green):
- Refer to:
- Additional Note:
    `;

    try {
      let result = await askGPT(prompt);

      if (
        result.length < 50 ||
        result.toLowerCase().includes("please type your symptoms")
      ) {
        console.warn("First response was insufficient. Retrying...");
        result = await askGPT(prompt);
      }

      setResponse(result);
    } catch (err) {
      console.error("GPT error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setResponse("");
    setError(null);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const [showModal, setShowModal] = useState(true);
const { i18n } = useTranslation();

const handleLanguageSelect = (language: string) => {
  i18n.changeLanguage(language);
  setShowModal(false);
};
  return (

    <div className="bg-pink-50 min-h-screen">
      {/* Language Switcher */}
{/* Show Language Modal Popup */}
{showModal && <LanguageModal onSelectLanguage={handleLanguageSelect} />}
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <SymptomSection
          onResponse={handleSubmit}
          setLoading={setIsProcessing}
          setError={setError}
        />

        {error && (
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 mt-4 flex items-center space-x-2">
            <AlertTriangle className="text-red-600 w-5 h-5" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {isProcessing && (
          <div className="flex justify-center mt-6">
            <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
          </div>
        )}

        {response && !isProcessing && (
          <>
            <GPTResponseCard response={response} />
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
                onClick={handleClear}
              >
                {t("clear")}
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="bg-purple-100 p-6 mt-12 text-sm text-gray-700 text-center rounded-t-2xl shadow-inner">
        <p className="text-sm text-gray-700">
  {t("footerDisclaimer")}
</p>
      </footer>
    </div>
  );
}