import { useTranslation } from 'react-i18next';
import { Languages, Stethoscope, HeartPulse } from 'lucide-react';

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
  {t("featuresTitle", { app: t("appName") })}
</h2>


        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          {t("featuresDesc")}
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Translation Feature */}
          <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Languages className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t("feature1Title")}
            </h3>
            <p className="text-gray-600">{t("feature1Desc")}</p>
          </div>

          {/* Triage Feature */}
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Stethoscope className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t("feature2Title")}
            </h3>
            <p className="text-gray-600">{t("feature2Desc")}</p>
          </div>

          {/* Specialist Referral Feature */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <HeartPulse className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t("feature3Title")}
            </h3>
            <p className="text-gray-600">{t("feature3Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
