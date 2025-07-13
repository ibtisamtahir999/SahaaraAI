// src/components/LanguageModal.tsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageModal({ onSelectLanguage }: { onSelectLanguage: (lang: string) => void }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">{t("selectLanguage")}</h2>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onSelectLanguage("en")}
            className="py-2 px-4 bg-gray-100 rounded hover:bg-gray-200"
          >
            English
          </button>
          <button
            onClick={() => onSelectLanguage("ur")}
            className="py-2 px-4 bg-gray-100 rounded hover:bg-gray-200"
          >
            اردو
          </button>
          <button
            onClick={() => onSelectLanguage("ps")}
            className="py-2 px-4 bg-gray-100 rounded hover:bg-gray-200"
          >
            پښتو
          </button>
          <button
            onClick={() => onSelectLanguage("pa")}
            className="py-2 px-4 bg-gray-100 rounded hover:bg-gray-200"
          >
            پنجابی
          </button>
        </div>
      </div>
    </div>
  );
}
