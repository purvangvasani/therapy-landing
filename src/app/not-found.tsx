"use client";

import { Globe } from "@/components/magicui/globe";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        // <div className="min-h-screen flex flex-col items-center justify-center text-center">
        //   <h1 className="text-6xl font-bold mb-4">404 here</h1>
        //   <p className="text-xl text-muted-foreground mb-6">Sorry, this page does not exist.</p>
        //   <a href="/" className="text-primary underline">Go back home</a>
        // </div>
        <>
            <div className="h-[70svh] flex flex-col justify-center text-center p-4">
                <div className="flex relative items-center justify-center overflow-hidden rounded-lg border bg-background px-6 sm:px-10 md:px-20 pb-50 pt-8 sm:pb-70 md:pb-80">
                    <Link href="/" className="inline-flex items-center text-blue-600 hover:none mr-5">
                        <ChevronLeft className="h-5 w-5" />
                        Back
                    </Link>
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        404: Page not found!
                    </span>
                    <Globe className="absolute top-14 sm:top-14" />
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
            </div>
        </>
    );
}