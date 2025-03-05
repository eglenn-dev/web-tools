"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Base64ImageConverter() {
    const [base64String, setBase64String] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const encodeImage = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            setBase64String(base64.split(",")[1]);
            setImagePreview(base64);
        };
        reader.readAsDataURL(file);
    };

    const decodeImage = () => {
        try {
            const img = `data:image/png;base64,${base64String}`;
            setImagePreview(img);
        } catch (error) {
            console.error("Error decoding base64 string:", error);
            alert("Invalid base64 string");
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            encodeImage(file);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="max-w-xl bg-white w-full mx-auto p-8 rounded-xl space-y-4">
            <div>
                <Button onClick={handleUploadClick}>Upload Image</Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />
            </div>

            <div>
                <Label htmlFor="base64-input">Base64 String</Label>
                <Textarea
                    id="base64-input"
                    value={base64String}
                    onChange={(e) => setBase64String(e.target.value)}
                    placeholder="Paste your base64 string here"
                    rows={5}
                    spellCheck={false}
                />
            </div>

            <div>
                <Button onClick={decodeImage}>Decode Base64</Button>
            </div>

            {imagePreview && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Image Preview
                    </h2>
                    <img
                        src={imagePreview}
                        alt="Decoded"
                        className="max-w-full h-auto"
                    />
                </div>
            )}
        </div>
    );
}
