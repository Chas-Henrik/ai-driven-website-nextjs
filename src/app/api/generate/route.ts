import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
    const apiKey = process.env.GEMINI_API_KEY;
    if(!apiKey) {
        return new Response(JSON.stringify({ result: "Error: API key not found" }), { status: 401 });
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const { prompt } = await request.json();

    const result = await model.generateContent(prompt);

    return Response.json({
        result: result.response.text(),
    });
}