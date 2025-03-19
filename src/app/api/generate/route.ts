import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const { prompt } = await request.json();
    console.log(prompt);

    const result = await model.generateContent(prompt);

    return Response.json({
        result: result.response.text(),
    });
}