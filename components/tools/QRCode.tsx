"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function QRCodeMaker() {
    const [qrCodeUrl, setQrCodeUrl] = useState("https://google.com");
    const [outputUrl, setOutputUrl] = useState("");
    const [light, setLight] = useState("#ffffff");
    const [dark, setDark] = useState("#000000");
    const [size, setSize] = useState(300);

    useEffect(() => {
        QRCode.toDataURL(
            qrCodeUrl,
            { width: size, color: { dark: dark, light: light } },
            function (err: Error | null | undefined, url: string) {
                if (err) {
                    console.log("Error generating QR code", err);
                    return;
                }
                setOutputUrl(url);
            }
        );
    }, [qrCodeUrl, size, light, dark]);

    return (
        <div className="container mx-auto py-12 bg-white rounded-xl">
            <Card className="max-w-4xl mx-auto">
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl pt-4 font-semibold">
                                Settings
                            </h2>
                            <div className="space-y-2">
                                <Label htmlFor="size">Size (px)</Label>
                                <Input
                                    id="size"
                                    type="number"
                                    placeholder="Enter size in pixels"
                                    defaultValue={300}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value);
                                        if (!value) {
                                            setSize(300);
                                        } else if (value > 1000) {
                                            setSize(1000);
                                        } else if (value < 50) {
                                            setSize(50);
                                        } else {
                                            setSize(value);
                                        }
                                    }}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    type="url"
                                    placeholder="Enter valid url"
                                    defaultValue="https://google.com"
                                    onChange={(e) => {
                                        if (
                                            e.target.value.includes(
                                                "http://"
                                            ) ||
                                            e.target.value.includes("https://")
                                        ) {
                                            setQrCodeUrl(e.target.value);
                                        } else {
                                            setQrCodeUrl(
                                                "https://" + e.target.value
                                            );
                                        }
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="light">
                                        Background Color
                                    </Label>
                                    <Input
                                        id="light"
                                        type="color"
                                        defaultValue="#ffffff"
                                        onChange={(e) =>
                                            setLight(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="dark">QR Code Color</Label>
                                    <Input
                                        id="dark"
                                        type="color"
                                        defaultValue="#000000"
                                        onChange={(e) =>
                                            setDark(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            {outputUrl && (
                                <Button asChild className="w-full">
                                    <a href={outputUrl} download="qr-code.png">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download QR Code
                                    </a>
                                </Button>
                            )}
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
                            {outputUrl && (
                                <div
                                    style={{
                                        height: size,
                                        width: size,
                                        maxWidth: "300px",
                                        maxHeight: "300px",
                                    }}
                                >
                                    <Image
                                        src={outputUrl}
                                        alt="QR Code"
                                        width={size}
                                        height={size}
                                        className="rounded-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
