import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SplitSection from "@/components/sections/SplitSection";
import CTABanner from "@/components/sections/CTABanner";
import ClassCard from "@/components/cards/ClassCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Present Heart Living | Yoga & Pilates Classes in the Highlands",
  description:
    "Yoga, Pilates and breathwork classes in the Scottish Highlands. Present Heart Living offers mindful movement, restorative practices and retreats designed to support balance and wellbeing.",
};

const classes = [
  {
    title: "Seasonal Flow Yoga",
    description: "A flowing practice combining movement and breath to develop strength, mobility and body awareness.",
    href: "/classes/seasonal-flow-yoga",
    imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    imageAlt: "Seasonal flow yoga practice",
  },
  {
    title: "Restorative Yoga",
    description: "A deeply relaxing practice designed to calm the nervous system and encourage deep rest.",
    href: "/classes/restorative-yoga",
    imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    imageAlt: "Restorative yoga practice",
  },
  {
    title: "Yin Yoga",
    description: "A slower and reflective practice that supports joint mobility and mindful awareness.",
    href: "/classes/yin-yoga",
    imageSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
    imageAlt: "Yin yoga practice",
  },
  {
    title: "Pilates",
    description: "Pilates strengthens the body, improves posture and supports healthy movement patterns.",
    href: "/pilates-classes-highlands",
    imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    imageAlt: "Pilates mat practice",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Present Heart Living"
        subtitle="Movement, Breath and Awareness for a Balanced Life"
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop"
        imageAlt="Yoga practice in natural light in the Scottish Highlands"
        primaryCTA={{ label: "Book a Class", href: "/contact" }}
        secondaryCTA={{ label: "Explore Classes", href: "/classes" }}
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">A Space to Slow Down and Reconnect</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6 mx-auto">
            <p>
              Modern life often moves quickly, leaving little time to pause and care for our wellbeing.
              Present Heart Living provides a calm and supportive environment where people can step away
              from the demands of daily life and reconnect with themselves through mindful movement and
              breath awareness.
            </p>
            <p>
              The aim is not to achieve perfect poses, but to develop strength, flexibility and a deeper
              understanding of how the body moves and feels.
            </p>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="py-16 lg:py-24 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Yoga and Pilates Classes in the Highlands</h2>
            <p className="text-peat/80 max-w-2xl mx-auto">
              Present Heart Living offers a range of practices designed to support both physical and mental wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls) => (
              <ClassCard key={cls.title} {...cls} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/classes">Explore Classes</Button>
          </div>
        </div>
      </section>

      {/* Retreats */}
      <SplitSection
        title="Retreats and Wellbeing Experiences"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop"
        imageAlt="Scottish Highlands landscape for retreat setting"
      >
        <p>
          Retreats offer the opportunity to step away from everyday routines and reconnect with what matters most.
        </p>
        <p>
          Present Heart Living retreats combine yoga, breathwork and mindfulness practices with time in nature,
          creating space for reflection, rest and renewed energy.
        </p>
        <Button href="/retreats" className="mt-4">Explore Retreats</Button>
      </SplitSection>

      {/* Meet Audrey */}
      <SplitSection
        title="Meet Audrey Buchanan"
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
        imageAlt="Audrey Buchanan, founder of Present Heart Living"
        reverse
      >
        <p>
          Present Heart Living was founded by Audrey Buchanan, an experienced teacher with more than
          thirty years of personal yoga practice.
        </p>
        <p>
          Audrey brings together her background in education, mindfulness training and yoga teaching to
          create classes that are inclusive, thoughtful and grounded in genuine experience.
        </p>
        <p>
          Her approach encourages students to move with awareness and develop practices that support
          wellbeing beyond the mat.
        </p>
        <Button href="/about/audrey-buchanan" variant="outline" className="mt-4">
          Learn More About Audrey
        </Button>
      </SplitSection>

      {/* CTA */}
      <CTABanner
        title="Begin Your Practice"
        subtitle="Whether you are new to yoga or returning after time away, Present Heart Living offers a welcoming place to begin or deepen your practice."
        primaryCTA={{ label: "Book Your First Class", href: "/contact" }}
      />
    </>
  );
}
