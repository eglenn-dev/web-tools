import GradientGenerator from "@/components/tools/GradientGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CSS Gradient | WebTools",
    description: "Generate CSS gradients with this simple tool. Choose colors and direction to get the CSS code.",
}

export default async function QRCodePage() {
    return (
        <section>
            <div className="bg-transparent text-white py-12 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">CSS Gradient</h1>
                <p className="text-lg md:text-2xl mb-8">Generate CSS gradients with this simple tool. Choose colors and direction to get the CSS code</p>
            </div>
            <div className="bg-white text-[#18182c] py-28 flex justify-center">
                <GradientGenerator />
            </div>
        </section>
    )
}