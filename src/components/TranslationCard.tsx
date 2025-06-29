// src/components/TranslationCard.tsx
import { Languages, AlertCircle, CheckCircle } from "lucide-react";
import { TranslationResult } from "../types";

interface Props {
  result: TranslationResult;
}

export default function TranslationCard({ result }: Props) {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-green-600";
    if (confidence >= 0.7) return "text-yellow-500";
    return "text-red-600";
  };

  return (
<div className="bg-purple-50 border border-purple-200 rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <Languages className="w-6 h-6 text-purple-600" />
        <h3 className="text-xl font-bold text-gray-800">Translation Result</h3>
      </div>

      {/* Source Language & Confidence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Source Language</p>
<p className="text-lg font-semibold text-gray-800">
  {result.sourceLanguage === "pashto"
    ? "Pashto (پښتو)"
    : result.sourceLanguage === "urdu"
    ? "Urdu (اردو)"
    : result.sourceLanguage === "punjabi"
    ? "Punjabi (پنجابی)"
    : "English"}
</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Translation Confidence</p>
          <div className="flex items-center space-x-2">
            {result.confidence >= 0.7 ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
            <span
              className={`text-lg font-semibold ${getConfidenceColor(
                result.confidence
              )}`}
            >
              {Math.round(result.confidence * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Original Text */}
      <div className="mb-4">
        <h4 className="text-md font-semibold text-gray-800 mb-2">Original Text</h4>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p dir="auto" className="text-gray-800">{result.originalText}</p>
        </div>
      </div>

      {/* Translated Text */}
      <div>
        <h4 className="text-md font-semibold text-gray-800 mb-2">English Translation</h4>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-gray-800">{result.translatedText}</p>
        </div>
      </div>

      {/* Warning if Low Confidence */}
      {result.confidence < 0.7 && (
        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-yellow-800 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5" />
          <p><strong>Note:</strong> Translation confidence is low. Please verify with a medical interpreter.</p>
        </div>
      )}
    </div>
  );
}