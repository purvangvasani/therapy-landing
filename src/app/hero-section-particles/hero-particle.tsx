"use client";

import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedGradientTextDemo } from "../animated-text/animated-text";
import Link from "next/link";


export function ParticlesDemo() {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        <div className="relative flex h-[74svh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            {/* <div className="grid grid-cols-[50%_50%] gap-4 items-center"> */}
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-5">
                    MyTherapy.co.in
                </span>
                <Link href={'https://app.mytherapy.co.in/'} target="_blank" className="pointer-events-auto">
                    <AnimatedGradientTextDemo />
                </Link>
                {/* <MagicCardDemo /> */}
            {/* </div> */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
}
