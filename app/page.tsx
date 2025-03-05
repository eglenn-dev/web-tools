import Hero from "@/components/Hero";
import Link from "next/link";
import { QRCodeIcon, ImageIcon, ShrinkIcon } from "@/components/Icons";

export default function Home() {
    return (
        <div>
            <Hero />
            <div id="projects" className="py-11 bg-transparent text-[#18182c]">
                <div className="flex flex-wrap justify-center align-center gap-8">
                    <Link href="/tools/css-gradient">
                        <div className="w-72 h-52 bg-white border-2 border-[#18182c] rounded-3xl p-8 text-center flex flex-col items-center justify-center">
                            <ShrinkIcon />
                            <h3 className="font-[#18182c] font-bold text-2xl">
                                CSS Gradient
                            </h3>
                            <p>Create simple CSS gradients</p>
                        </div>
                    </Link>
                    <Link href="/tools/webp">
                        <div className="w-72 h-52 bg-white border-2 border-[#18182c] rounded-3xl p-8 text-center flex flex-col items-center justify-center">
                            <ImageIcon />
                            <h3 className="font-[#18182c] font-bold text-2xl">
                                WebP Converter
                            </h3>
                            <p>Convert any image to the next-gen WebP format</p>
                        </div>
                    </Link>
                    <Link href="/tools/qr">
                        <div className="w-72 h-52 bg-white border-2 border-[#18182c] rounded-3xl p-8 text-center flex flex-col items-center justify-center">
                            <QRCodeIcon />
                            <h3 className="font-[#18182c] font-bold text-2xl">
                                QR Code
                            </h3>
                            <p>Generate QR codes on the fly</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
