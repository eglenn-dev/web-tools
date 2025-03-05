"use client";
import { useState } from "react";
import { convertToWebP } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ImageConverter() {
    const [file, setFile] = useState<File | null>(null);
    const [convertedImageUrl, setConvertedImageUrl] = useState<string | null>(
        null
    );
    const [convertedFilename, setConvertedFilename] = useState<string | null>(
        null
    );
    const [isConverting, setIsConverting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) return;

        setIsConverting(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await convertToWebP(formData);
            const blob = new Blob([Buffer.from(result.webpBuffer, "base64")], {
                type: "image/webp",
            });
            const url = URL.createObjectURL(blob);
            setConvertedImageUrl(url);
            setConvertedFilename(result.filename);
        } catch (error) {
            console.error("Conversion failed:", error);
            alert("Conversion failed. Please try again.");
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <Card className="w-full max-w-4xl rounded-xl bg-white">
            <CardHeader>
                <p className="text-sm text-muted-foreground">
                    Upload file size cannot exceed 1mb.
                </p>
            </CardHeader>
            <CardContent>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="image">
                                        Select an image
                                    </Label>
                                    <Input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setFile(e.target.files?.[0] || null)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    disabled={!file || isConverting}
                                >
                                    {isConverting
                                        ? "Converting..."
                                        : "Convert to WebP"}
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {convertedImageUrl && convertedFilename ? (
                            <div className="flex flex-col items-start">
                                <a
                                    href={convertedImageUrl}
                                    download={convertedFilename}
                                    className="text-blue-600 hover:underline mb-2"
                                >
                                    Download Converted Image
                                </a>
                                <div className="border rounded-md p-2 bg-gray-50">
                                    <img
                                        src={convertedImageUrl}
                                        alt="Converted WebP"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-48 bg-gray-100 rounded-md">
                                <p className="text-gray-500">
                                    Converted images will appear here
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
