import { useTranslation } from "react-i18next";
import { Languages, Stethoscope, UserPlus } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          {t("howItWorksTitle")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-pink-50 rounded-lg shadow">
            <Languages className="w-10 h-10 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("step1Title")}</h3>
            <p className="text-gray-600 text-sm">{t("step1Desc")}</p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-purple-50 rounded-lg shadow">
            <Stethoscope className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("step2Title")}</h3>
            <p className="text-gray-600 text-sm">{t("step2Desc")}</p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-indigo-50 rounded-lg shadow">
            <UserPlus className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("step3Title")}</h3>
            <p className="text-gray-600 text-sm">{t("step3Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
