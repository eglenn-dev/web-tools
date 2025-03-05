import Base64ImageConverter from "@/components/tools/Base64Converter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Base64 Converter | WebTools",
    description: "Convert images to and from base 64",
};

export default async function QRCodePage() {
    return (
        <section>
            <div className="bg-transparent text-white py-12 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">
                    Base64 Converter
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Convert images to and from Base64
                </p>
            </div>
            <div className="bg-transparent text-[#18182c] py-11 flex justify-center">
                <Base64ImageConverter />
            </div>
        </section>
    );
}
