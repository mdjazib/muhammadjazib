"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { CircleEllipsis } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const AskMe = () => {
    const [answer, setAnswer] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        askAI();
    };

    const askAI = async () => {
        const res = await fetch("/api/ask", {
            method: "POST",
            body: JSON.stringify({ prompt: msg }),
        });
        const data = await res.json();
        setAnswer(data.text);
    };

    return (
        <div className="ai-power">
            <div className="header">
                <Image src={"/me.jpg"} alt="Muhammad Jazib" width={100} height={100} />
                <p>Muhammad Jazib's Assistant</p>
                <CircleEllipsis />
            </div>
            <div className="chat"></div>
            <PlaceholdersAndVanishInput
                placeholders={[
                    "Ask anything about jazib...",
                    "What tech stack does Jazib use?",
                    "How many years of experience does he have?",
                    "Can you tell me about Jazib in a short summary?",
                    "Will he be able to fix my website issues?",
                    "What’s his pay rate for web development?",
                    "Show me his previous client projects.",
                    "Share his contact information please.",
                    "Does he offer SEO or digital marketing?",
                    "What companies has Jazib worked with?",
                    "Is he open to freelance or part-time work?",
                    "Tell me about Zonal Web.",
                    "Can Jazib handle UI/UX design too?",
                    "Does he build mobile responsive sites?",
                    "How does he manage team workflows?",
                ]}
                onSubmit={onSubmit}
                onChange={handleChange}
            />
            <p className="ai-res" >{answer}</p>
        </div>
    );
};

export default AskMe;
