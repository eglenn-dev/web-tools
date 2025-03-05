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
import { minify } from "terser";

export default function JSMinifier() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [isMinifying, setIsMinifying] = useState(false);

    const handleMinify = useCallback(async () => {
        setIsMinifying(true);
        try {
            const result = await minify(input, {
                mangle: true,
                compress: {
                    dead_code: true,
                    drop_debugger: true,
                    conditionals: true,
                    evaluate: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    hoist_funs: false,
                    keep_fargs: true,
                    hoist_vars: false,
                    if_return: true,
                    join_vars: true,
                    side_effects: true,
                },
            });
            setOutput(result.code || "");
        } catch (error) {
            console.error("Minification error:", error);
            setOutput("Error: Invalid JavaScript code");
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
        <Card className="w-full p-2 bg-white rounded-xl max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>JavaScript Minifier</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    placeholder="Paste your JavaScript code here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[200px]"
                />
                <Button onClick={handleMinify} disabled={isMinifying}>
                    {isMinifying ? "Minifying..." : "Minify"}
                </Button>
                <Textarea
                    placeholder="Minified output will appear here"
                    value={output}
                    readOnly
                    className="min-h-[200px]"
                />
            </CardContent>
            <CardFooter>
                <Button onClick={handleCopy} disabled={!output}>
                    Copy Minified Code
                </Button>
            </CardFooter>
        </Card>
    );
}
