// src/components/GPTResponseCard.tsx
import { MessageSquareText } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  response: string;
}

export default function GPTResponseCard({ response }: Props) {
  const { t } = useTranslation();

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-lg mt-6">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquareText className="w-6 h-6 text-purple-600" />
        <h3 className="text-xl font-bold text-gray-800">
          {t("aiResponseTitle")}
        </h3>
      </div>
      <pre className="whitespace-pre-wrap text-gray-700">{response}</pre>
    </div>
  );
}
