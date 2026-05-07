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
            - Generate SELECT, INSERT, UPDATE, or DELETE queries as appropriate
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
