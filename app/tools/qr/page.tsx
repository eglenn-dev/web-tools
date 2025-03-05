import QRCodeMaker from "@/components/tools/QRCode";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "QR Code | WebTools",
    description:
        "Generate a QR code for any URL, all for free and easy to use.",
};

export default async function QRCodePage() {
    return (
        <section>
            <div className="bg-transparent text-white py-12 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">
                    QR Code Generator
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Generate a QR code for any URL
                </p>
            </div>
            <div className="bg-transparent text-[#18182c]">
                <QRCodeMaker />
            </div>
        </section>
    );
}
