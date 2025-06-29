import { Separator } from "@/components/ui/separator";
import { ParticlesDemo } from "./hero-section-particles/hero-particle";
import { MarqueeDemo } from "./marquee/marquee";
import { AnimatedTestimonialsDemo } from "./bento-grid/testimonial";
import { AnimatedListDemo } from "./services/OurServices";
import { ShineBorderDemo2 } from "./contact/ContactUs";
import dynamic from 'next/dynamic';
import WhatWeAre from "./what-we-are/WhatWeAre";
import WhatWeDo from "./what-we-do/WhatWeDo";

// const WhatWeAre = dynamic(
//   () => import('./what-we-are/WhatWeAre').then((mod) => mod.default),
//   { ssr: false }
// ) as React.ComponentType;

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <ParticlesDemo />
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
        <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
        <a 
          href="/faq" 
          className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Visit our FAQ Section
        </a>
      </div>
      {/* <Separator /> */}
    </div>
  );
}
