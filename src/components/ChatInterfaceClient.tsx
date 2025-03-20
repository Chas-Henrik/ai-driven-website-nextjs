"use client";

import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";


export default function ChatInterfaceClient() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    async function inputOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setPrompt(e.target.value);
    }

    async function buttonClickedHandler(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    
        const response = await fetch("/api/generate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt }),
        });

        const data = await response.json();
        const result = data.result;
        setResult(result);
    }

    return(
        <article className='max-w-[50%] m-auto my-3 p-3 flex flex-col items-center font-sans font-medium text-base text-left'>
            <h1 className='m-2 text-4xl font-bold'>Chat Interface (Server Component)</h1>
            <input className='m-2 p-2 min-w-full border-2 border-solid border-black rounded-md leading-6' type="text" onChange={inputOnChangeHandler} placeholder="Enter your question here" />
            <button className='m-10 p-2 border-2 border-solid border-black rounded-md shadow-black shadow-md' type="submit" onClick={buttonClickedHandler}>Send</button>
            <ReactMarkdown>{result}</ReactMarkdown>
        </article>
    )
}