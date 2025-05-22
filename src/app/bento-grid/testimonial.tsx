import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Offers deep trauma consultation in quiet, safe spaces. His presence alone tends to put clients at ease.",
      name: "Arjun Mehta",
      designation: "Psychiatrist & Trauma Specialist",
      src: "arjun_mehta_full.png",
    },
    {
      quote:
        "He works closely with teens and college students, making mental health less intimidating.",
      name: "Karan Roy",
      designation: "Genz Psychiatrist",
      src: "karan_roy_full.png",
    },
    {
      quote:
        "Helps overachievers and perfectionists manage hidden mental health struggles.",
      name: "Noah Verma",
      designation: "Psychiatrist, helps high-functioning individuals",
      src: "noah_verma_full.png",
    },
    {
      quote:
        "Helps individuals and couples embrace emotionally fulfilling, pleasure-positive, and shame-free relationships.",
      name: "Tara Devanshi",
      designation: "Psychiatrist & Sex Therapist",
      src: "tara_devanshi_full.png",
    },
    {
      quote:
        "She helps couples rediscover connection and navigate marital stress with grace.",
      name: "Leela Sharma",
      designation: "Psychiatrist & Relationship Therapist",
      src: "leela_sharma_full.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
