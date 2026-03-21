import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || "",
});

export async function explainResult(prompt: string, result:any){
    const response=await groq.chat.completions.create({
        model:"openai/gpt-oss-20b",
        messages: [
            {
                role: "system",
                content: `
                    You are a data analyst.

                    Convert database query results into clear, human-readable answers.

                    Keep it short and natural.
                `
            },
            {
                role: "user",
                content: `
                    User question: ${prompt}

                    Query Result: ${JSON.stringify(result)}
                `
            },
        ],
    });

    return response.choices[0].message?.content || "";
}