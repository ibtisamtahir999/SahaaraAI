import React, { useState } from "react";
import { Bot, Stethoscope } from "lucide-react";
import { askGPT } from "../utils/gptClient";

type Props = {
  onResponse: (output: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (msg: string | null) => void;
};

export default function SymptomSection({ onResponse, setLoading, setError }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please describe the symptoms.");
      return;
    }

    setLoading(true);
    setError(null);

    const prompt = `
You are SahaaraAI, a multilingual AI medical assistant.
Analyze the following patient symptoms: "${text}"

Please:
1. Translate to English
2. Summarize the case
3. Provide triage level (low, medium, high)
4. Recommend a specialist

Reply like this:
- Translation:
- Summary:
- Triage Level:
- Refer to:
    `;

    try {
      const result = await askGPT(prompt);
      onResponse(result);
    } catch (error) {
      console.error(error);
      setError("An error occurred while contacting SahaaraAI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-pink-50 border border-pink-200 rounded-2xl p-6 shadow-lg max-w-3xl mx-auto my-6">
      <h2 className="text-2xl font-semibold text-purple-800 flex items-center gap-2 mb-4">
        <Stethoscope className="w-6 h-6 text-purple-500" />
        Describe Patient Symptoms
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write the symptoms in any language (Pashto, Urdu, etc.)"
        className="w-full h-32 p-4 rounded-lg border border-purple-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-purple-600 transition"
      >
        <Bot className="w-4 h-4 inline mr-2" />
        Ask SahaaraAI
      </button>
    </section>
  );
}