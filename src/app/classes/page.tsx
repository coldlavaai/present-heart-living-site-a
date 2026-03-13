import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ClassCard from "@/components/cards/ClassCard";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Yoga and Pilates Classes Highlands | Present Heart Living",
  description:
    "Explore yoga, Pilates and restorative practices at Present Heart Living in the Highlands. Classes designed to support strength, flexibility and relaxation.",
};

const classes = [
  {
    title: "Seasonal Flow Yoga",
    description:
      "Seasonal Flow Yoga blends elements of Hatha and Vinyasa yoga to create a flowing sequence of movements guided by breath. This practice builds strength and flexibility while encouraging mindful awareness.",
    href: "/classes/seasonal-flow-yoga",
    imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    imageAlt: "Seasonal flow yoga practice",
  },
  {
    title: "Restorative Yoga",
    description:
      "Restorative yoga focuses on deep relaxation and nervous system recovery. Supported poses are held for longer periods, allowing the body to release tension and settle into rest.",
    href: "/classes/restorative-yoga",
    imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    imageAlt: "Restorative yoga with props",
  },
  {
    title: "Yin Yoga",
    description:
      "Yin yoga offers a slower and more reflective approach to movement. Postures are held for several minutes, supporting joint mobility and encouraging mindful awareness.",
    href: "/classes/yin-yoga",
    imageSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
    imageAlt: "Yin yoga practice",
  },
  {
    title: "Pilates Classes",
    description:
      "Pilates focuses on controlled movement, alignment and core strength. The practice supports healthy posture and improves the stability of the muscles that support the spine.",
    href: "/pilates-classes-highlands",
    imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    imageAlt: "Pilates mat class",
  },
  {
    title: "Breathwork",
    description:
      "Breathwork practices explore the relationship between breathing and overall wellbeing, supporting relaxation, focus and emotional balance.",
    href: "/classes/breathwork",
    imageSrc: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&h=400&fit=crop",
    imageAlt: "Breathwork and meditation",
  },
  {
    title: "Sound Baths",
    description:
      "Sound baths are immersive relaxation experiences that use sound and vibration to encourage deep rest and calm.",
    href: "/classes/sound-baths",
    imageSrc: "https://images.unsplash.com/photo-1591228127121-c36534347f84?w=600&h=400&fit=crop",
    imageAlt: "Sound bath with singing bowls",
  },
];

export default function ClassesPage() {
  return (
    <>
      <Hero
        title="Yoga and Pilates Classes in the Scottish Highlands"
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop"
        imageAlt="Yoga class in a sunlit studio"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">A Balanced Approach to Movement</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6 mx-auto">
            <p>
              Classes at Present Heart Living combine movement, breathing techniques and relaxation practices
              to support both physical strength and emotional balance.
            </p>
            <p>
              Students are encouraged to move at their own pace while developing awareness of how their bodies feel.
            </p>
          </div>
        </div>
      </section>

      {/* Class Cards */}
      <section className="py-16 lg:py-24 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <ClassCard key={cls.title} {...cls} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin?"
        primaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
