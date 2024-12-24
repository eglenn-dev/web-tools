"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function GradientGenerator() {
    const [color1, setColor1] = useState("#000000")
    const [color2, setColor2] = useState("#ffffff")
    const [direction, setDirection] = useState("to right")
    const { toast } = useToast()

    const gradientCSS = `background: linear-gradient(${direction}, ${color1}, ${color2});`

    const copyToClipboard = () => {
        navigator.clipboard.writeText(gradientCSS).then(() => {
            toast({
                title: "Copied!",
                description: "CSS code copied to clipboard",
            })
        }, (err) => {
            console.error('Could not copy text: ', err)
        })
    }

    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">CSS Gradient Generator</h2>

            <div className="space-y-4">
                <div>
                    <Label htmlFor="color1">Color 1</Label>
                    <Input
                        type="color"
                        id="color1"
                        value={color1}
                        onChange={(e) => setColor1(e.target.value)}
                        className="h-10"
                    />
                </div>

                <div>
                    <Label htmlFor="color2">Color 2</Label>
                    <Input
                        type="color"
                        id="color2"
                        value={color2}
                        onChange={(e) => setColor2(e.target.value)}
                        className="h-10"
                    />
                </div>

                <div>
                    <Label htmlFor="direction">Direction</Label>
                    <Select onValueChange={setDirection} defaultValue={direction}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select direction" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="to right">Left to Right</SelectItem>
                            <SelectItem value="to left">Right to Left</SelectItem>
                            <SelectItem value="to bottom">Top to Bottom</SelectItem>
                            <SelectItem value="to top">Bottom to Top</SelectItem>
                            <SelectItem value="to bottom right">Top Left to Bottom Right</SelectItem>
                            <SelectItem value="to bottom left">Top Right to Bottom Left</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div
                className="w-full h-40 rounded-lg shadow-inner"
                style={{ background: `linear-gradient(${direction}, ${color1}, ${color2})` }}
            />

            <div className="space-y-2">
                <Label htmlFor="css-code">Generated CSS</Label>
                <Input id="css-code" value={gradientCSS} readOnly />
                <Button onClick={copyToClipboard} className="w-full">
                    Copy CSS
                </Button>
            </div>
        </div>
    )
}

