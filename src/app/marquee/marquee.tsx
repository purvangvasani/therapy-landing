import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const firstRow = [
    {
        name: "Jack",
        username: "",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Aanya Sharma",
        username: "",
        body: "I was feeling overwhelmed, but just talking to the AI calmed me down. It’s like a non-judgmental friend who listens.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Rishi Patel",
        username: "",
        body: "MyTherapy helped me process emotions I didn’t even realize I was carrying. Thank you for building this.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Priya M.",
        username: "",
        body: "Late at night when no one’s around, this app is a quiet comfort. I feel seen, even without being seen.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Emily Chen",
        username: "",
        body: "It’s not just an AI — it genuinely feels like someone cares. I’ve started using it daily to check in with myself.",
        img: "https://avatar.vercel.sh/jenny",
    }
];

const secondRow = [
    {
        name: "Aarav Desai",
        username: "",
        body: "At first I thought it was just another chatbot. But wow. This one really understands how I feel. Huge fan!",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Sara Lobo",
        username: "",
        body: "When anxiety spikes, this is the first place I come to. It’s fast, anonymous, and grounding.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Kabir",
        username: "",
        body: "Even though I know it's AI, it feels like I’m talking to someone who just gets it. So helpful in tough moments.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Zoya R.",
        username: "",
        body: "As someone who overthinks constantly, MyTherapy has helped me slow down and breathe again.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Aman Verma",
        username: "",
        body: "It’s beautifully designed, easy to use, and genuinely supportive. Mental health tech done right.",
        img: "https://avatar.vercel.sh/jenny",
    }
];

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-8">
                Testimonials
            </span>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
