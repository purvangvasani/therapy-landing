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
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10">
            Have Questions?
          </h2>
          <div className="pt-2">
            <a
              href="/faq"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-base sm:text-lg"
            >
              Visit our FAQ Section
            </a>
          </div>
        </div>
      </div>
      {/* <Separator /> */}
    </div>
  );
}
