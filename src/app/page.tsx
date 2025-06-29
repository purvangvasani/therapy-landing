import { Separator } from "@/components/ui/separator";
import { ParticlesDemo } from "./hero-section-particles/hero-particle";
import { MarqueeDemo } from "./marquee/marquee";
import { AnimatedTestimonialsDemo } from "./bento-grid/testimonial";
import { AnimatedListDemo } from "./services/OurServices";
import { ShineBorderDemo2 } from "./contact/ContactUs";
import WhatWeAre from "./what-we-are/WhatWeAre";
import WhatWeDo from "./what-we-do/WhatWeDo";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <ParticlesDemo />
      <Separator />
      <WhatWeAre />
      <Separator />
      <MarqueeDemo />
      <Separator />
      <WhatWeDo />
      <Separator />
      <AnimatedListDemo />
      <Separator />
      <AnimatedTestimonialsDemo />
      <Separator />

      <div className="relative w-[70%] overflow-hidden">
        <ShineBorderDemo2 />
      </div>
      <Separator />
      <div className="w-full text-center py-8">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Have Questions?
        </span>
        <a
          href="/faq"
          className="inline-block px-3 py-2 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Visit our FAQ Section
        </a>
      </div>
      {/* <Separator /> */}
    </div>
  );
}
