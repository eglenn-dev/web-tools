import { ImageConverter } from "@/components/tools/ImageConverter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "WebP Converter | WebTools",
    description: "Generate a QR code for any URL, all for free and easy to use.",
}

export default async function QRCodePage() {
    return (
        <section>
            <div className="bg-transparent text-white py-12 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">WebP Image Converter</h1>
                <p className="text-lg md:text-2xl mb-8">Convert images to the next-gen WebP format for free</p>
            </div>
            <div className="bg-white text-[#18182c] py-28 flex justify-center">
                <ImageConverter />
            </div>
        </section>
    )
}