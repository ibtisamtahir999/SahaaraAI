import axios from "axios";

/**
 * Sends a prompt to OpenAI and returns the response
 */
export async function askGPT(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OpenAI API key not found. Set VITE_OPENAI_API_KEY in your .env file.");
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // or "gpt-4"
        messages: [
          {
            role: "system",
            content: "You are a multilingual AI medical assistant helping with symptom triage and referral.",
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