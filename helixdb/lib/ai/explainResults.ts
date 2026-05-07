import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || "",
});

export async function explainResult(prompt: string, result:any, error?: string){
    let content = `User question: ${prompt}\n\n`;
    if (error) {
        content += `Query Execution Error: ${error}\n\nPlease explain to the user in simple terms why their request failed, mentioning any constraints or issues if applicable.`;
    } else {
        content += `Query Result: ${JSON.stringify(result)}`;
    }

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
                content: content
            },
        ],
    });

    return response.choices[0].message?.content || "";
}