'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function askAI(question: string) {
    const apiKey = process.env.GEMINI_API_KEY;
    if(!apiKey) {
        return "Error: API key not found";
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(question);
    
    return result.response.text();
}
