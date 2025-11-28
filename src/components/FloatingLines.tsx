"use client";

import React, { useEffect, useRef } from "react";

interface FloatingLinesProps {
    color?: string;
    count?: number;
}

export function FloatingLines({ color = "#4f46e5", count = 20 }: FloatingLinesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const lines: {
            x: number;
            y: number;
            length: number;
            speed: number;
            offset: number;
        }[] = [];

        // Initialize lines
        for (let i = 0; i < count; i++) {
            lines.push({
                x: Math.random() * width,
                y: Math.random() * height,
                length: Math.random() * 200 + 100,
                speed: Math.random() * 0.5 + 0.1,
                offset: Math.random() * Math.PI * 2,
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;

            // Create gradient for lines
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, "rgba(79, 70, 229, 0)"); // Transparent start
            gradient.addColorStop(0.5, color); // Solid middle
            gradient.addColorStop(1, "rgba(79, 70, 229, 0)"); // Transparent end

            ctx.strokeStyle = gradient;

            lines.forEach((line) => {
                ctx.beginPath();

                // Move line up
                line.y -= line.speed;
                if (line.y + line.length < 0) {
                    line.y = height + line.length;
                    line.x = Math.random() * width;
                }

                // Draw vertical line with some sine wave movement
                const x = line.x + Math.sin(line.y * 0.01 + line.offset) * 20;

                ctx.moveTo(x, line.y);
                ctx.lineTo(x, line.y + line.length);

                // Fade out at ends
                ctx.globalAlpha = 0.3;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [color, count]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        />
    );
}
