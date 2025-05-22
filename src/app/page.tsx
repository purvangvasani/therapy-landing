import { Separator } from "@/components/ui/separator";
import { BentoDemo } from "./bento-grid/bento-grid";
import { ParticlesDemo } from "./hero-section-particles/hero-particle";
import { MarqueeDemo } from "./marquee/marquee";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <ParticlesDemo />
      <MarqueeDemo />
      <Separator />
      <BentoDemo />
    </div>
  );
}
