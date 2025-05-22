import { Separator } from "@/components/ui/separator";
import { ParticlesDemo } from "./hero-section-particles/hero-particle";
import { MarqueeDemo } from "./marquee/marquee";
import { AnimatedTestimonialsDemo } from "./bento-grid/testimonial";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <ParticlesDemo />
      <MarqueeDemo />
      <Separator />
      <AnimatedTestimonialsDemo />
      {/* <BentoDemo /> */}
    </div>
  );
}
