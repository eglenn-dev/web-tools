import JSMinifier from "@/components/tools/JSMinifier";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JS Minifier | WebTools",
    description: "Minify your JavaScript code to make it smaller and faster to load.",
}

export default async function QRCodePage() {
    return (
        <section>
            <div className="bg-transparent text-white py-12 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">JS Minifier</h1>
                <p className="text-lg md:text-2xl mb-8">Minify your JavaScript code to make it smaller and faster to load.</p>
            </div>
            <div className="bg-white text-[#18182c] py-28 flex justify-center">
                <JSMinifier />
            </div>
        </section>
    )
}