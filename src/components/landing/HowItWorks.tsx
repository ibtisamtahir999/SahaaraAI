import React from 'react';
import { Languages, Stethoscope, UserPlus } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          How <span className="text-pink-600">SahaaraAI</span> Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-pink-50 rounded-lg shadow">
            <Languages className="w-10 h-10 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multilingual Input</h3>
            <p className="text-gray-600 text-sm">
              Patients speak in Urdu, Pashto, or Punjabi. The app understands their symptoms in real-time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-purple-50 rounded-lg shadow">
            <Stethoscope className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Translation + Triage</h3>
            <p className="text-gray-600 text-sm">
              Translates symptoms to English, assigns triage level (Red, Yellow, Green), and assesses severity.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-indigo-50 rounded-lg shadow">
            <UserPlus className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Specialist Referral</h3>
            <p className="text-gray-600 text-sm">
              Directs patient to the right specialist (Cardiology, Gynae, Neuro, etc.) instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
