"use client";

import { useState, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import * as csso from "csso";

export default function CSSMinifier() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [isMinifying, setIsMinifying] = useState(false);

    const handleMinify = useCallback(() => {
        setIsMinifying(true);
        try {
            const minified = csso.minify(input, {
                restructure: true,
                comments: false,
            }).css;
            setOutput(minified);
        } catch (error) {
            console.error("Minification error:", error);
            setOutput("Error: Invalid CSS code");
        } finally {
            setIsMinifying(false);
        }
    }, [input]);

    const handleCopy = useCallback(() => {
        navigator.clipboard
            .writeText(output)
            .then(() => alert("Copied to clipboard!"))
            .catch((err) => console.error("Failed to copy: ", err));
    }, [output]);

    return (
        <Card className="w-full max-w-3xl p-2 mx-auto">
            <CardHeader>
                <CardTitle>CSS Minifier</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    placeholder="Paste your CSS code here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[200px]"
                    aria-label="CSS Input"
                />
                <Button onClick={handleMinify} disabled={isMinifying}>
                    {isMinifying ? "Minifying..." : "Minify"}
                </Button>
                <Textarea
                    placeholder="Minified output will appear here"
                    value={output}
                    readOnly
                    className="min-h-[200px]"
                    aria-label="Minified CSS Output"
                />
            </CardContent>
            <CardFooter>
                <Button onClick={handleCopy} disabled={!output}>
                    Copy Minified CSS
                </Button>
            </CardFooter>
        </Card>
    );
}
