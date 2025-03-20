'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function askAI(question: string) {
    console.log("askAI:", question);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(question);
    
    return result.response.text();
}
