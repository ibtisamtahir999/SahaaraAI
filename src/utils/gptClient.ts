import axios from "axios";

export async function askGPT(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OpenAI API key not found. Set VITE_OPENAI_API_KEY in your .env file.");
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `
You are SahaaraAI — a multilingual AI medical assistant.

You ONLY respond in **English**.

You understand: Pashto, Urdu, Punjabi, and English. Do NOT respond in Spanish or any other language.

Always trust the user-provided language. Do NOT try to detect the language yourself.

Your role is to:
- Translate to English
- Summarize the case
- Assess triage urgency
- Refer to a medical specialist

Format:
- Translation (to English):
- Summary:
- Triage Level (low / medium / high):
- Priority Color (green / yellow / red):
- Refer to:
- Additional Note:
            `.trim(),
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error: any) {
    console.error("GPT API Error:", error.response?.data || error.message);
    throw new Error("Failed to get GPT response. Please try again.");
  }
}