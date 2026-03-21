import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function generateSQL(prompt: string, schema: string) {
  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: [
      {
        role: "system",
        content: `
            You are an expert SQL generator.

            Database Schema:
            ${schema}

            Rules:
            - Only generate SELECT queries
            - Use PostgreSQL syntax
            - Return only SQL
            `
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return response.choices[0].message?.content || "";
}
