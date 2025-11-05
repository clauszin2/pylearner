

import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function explainCode(code: string): Promise<string> {
  const model = "gemini-2.5-flash";
  const prompt = `
Sei un tutor di Python esperto. Spiega il seguente codice Python a un principiante in italiano in modo MOLTO conciso.
- La spiegazione non deve superare i 3 punti principali.
- Usa un linguaggio estremamente semplice e diretto.
- Sii breve.

Codice da spiegare:
\`\`\`python
${code}
\`\`\`
`;
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    const text = response.text;
    return text ?? "Impossibile generare una spiegazione per questo codice.";
  } catch (error) {
    console.error("Gemini API error in explainCode:", error);
    return "Errore di comunicazione con l'API di Gemini.";
  }
}
