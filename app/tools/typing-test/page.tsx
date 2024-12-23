import SpeedTypingTest from '@/components/tools/SpeedTyping'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Typing Test | WebTools",
    description: "Test your typing speed and accuracy with our free online typing test.",
}

export default function TypingPage() {
    return (
        <main className='container mx-auto p-4'>
            <SpeedTypingTest />
        </main>
    )
}