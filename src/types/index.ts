// Type definitions for the medical triage application
export interface TranslationResult {
  originalText: string;
  translatedText: string;
  sourceLanguage: string;
  confidence: number;
}

export interface SpecialistReferral {
  specialist: string;
  department: string;
  reason: string;
  urgency: 'immediate' | 'within-24h' | 'routine';
}

export interface TriageResult {
  category: 'emergency' | 'semi-urgent' | 'non-urgent';
  priority: 'red' | 'yellow' | 'green';
  urgencyScore: number;
  matchedSymptoms: string[];
  recommendations: string;
  waitTime: string;
  specialistReferral?: SpecialistReferral;
}

export interface SymptomInput {
  text: string;
  language: 'pashto' | 'urdu' | 'english';
}