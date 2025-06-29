"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "AI-Powered Chat Support",
        description: "A friendly, always-available chatbot you can talk to anonymously — whether you’re overwhelmed, overthinking, or just need to be heard.",
        time: "",
        icon: "💬",
        color: "",
    },
    {
        name: "24/7 Access",
        description: "Talk whenever you need. No appointments, no waitlists. We’re here — even at 2 AM.",
        time: "",
        icon: "🔄",
        color: "",
    },
    {
        name: "Anonymity & Privacy",
        description: "We never ask who you are. Your thoughts stay safe with us — always.",
        time: "",
        icon: "🔒",
        color: "",
    },
    {
        name: "Completely Free",
        description: "Mental health support shouldn’t be a luxury. Our platform is 100% free to use — no fees, no hidden costs.",
        time: "",
        icon: "🆓",
        color: "",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col overflow-hidden",
                className,
            )}
        >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-4">
                    What Services We Provide
                </span>
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-md sm:text-md md:text-md lg:text-md font-normal leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-4">
                    At MyTherapy, we offer supportive, judgment-free mental health conversations — anytime, anywhere.
                </span>
            <div className="flex flex-col items-center justify-center overflow-hidden mb-8">
            </div>
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}
