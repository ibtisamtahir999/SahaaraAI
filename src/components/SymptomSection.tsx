import React, { useState } from "react";
import { Bot, Stethoscope, Mic } from "lucide-react";
import { askGPT } from "../utils/gptClient";

type Props = {
  onResponse: (output: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (msg: string | null) => void;
};

export default function SymptomSection({ onResponse, setLoading, setError }: Props) {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Pashto");

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please describe the symptoms.");
      return;
    }

    setLoading(true);
    setError(null);
    onResponse(""); // Clear old GPT output

    const prompt = `
You are SahaaraAI — an AI medical assistant. The patient wrote the symptoms in ${selectedLanguage}.

Your task:
- Accurately detect and translate the symptoms **from ${selectedLanguage} to natural English**.
- Do NOT guess or hallucinate.
- If unsure, return "Unclear" in the translation field.

Here are their symptoms:
"${text}"

Respond in this exact format:
- Translation (to English):
- Summary:
- Triage Level (low / medium / high):
- Priority Color (green / yellow / red):
- Refer to:
- Additional Note:

Important:
- NEVER reply in Spanish or French.
- Assume symptoms are real. Do not make up unrelated info.
- The patient is likely from South Asia, so be extra accurate with regional languages.
- Assume language is ${selectedLanguage} even if uncertain.
The language is ${selectedLanguage}, and the text is:
"""${text}"""
`;

    try {
      let result = await askGPT(prompt);

      if (result.length < 30) {
        console.warn("Short response detected. Retrying...");
        result = await askGPT(prompt);
      }

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

      {/* Language Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Select Input Language</label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 border border-purple-300 rounded-lg bg-white text-gray-800"
        >
          <option value="Pashto">Pashto</option>
          <option value="Urdu">Urdu</option>
          <option value="Punjabi">Punjabi</option>
          <option value="English">English</option>
        </select>
      </div>

      {/* Symptom Text Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write the symptoms in any language (Pashto, Urdu, etc.)"
        className="w-full h-32 p-4 rounded-lg border border-purple-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
      />

      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        {/* Mic button */}
        <button
          type="button"
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          title="Voice input coming soon!"
        >
          <Mic className="w-5 h-5 text-purple-600" />
        </button>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-purple-600 transition"
        >
          <Bot className="w-4 h-4 inline mr-2" />
          Ask SahaaraAI
        </button>
      </div>
    </section>
  );
}