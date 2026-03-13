import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SplitSection from "@/components/sections/SplitSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Present Heart Living | Audrey Buchanan Yoga Teacher",
  description:
    "Learn about Present Heart Living and founder Audrey Buchanan. Discover a philosophy of mindful movement, breath awareness and wellbeing.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Present Heart Living"
        imageSrc="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=900&fit=crop"
        imageAlt="Calm yoga studio with natural light"
        variant="narrow"
      />

      {/* A Practice Rooted in Awareness */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Practice Rooted in Awareness</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living was created as a space where yoga and mindful movement can be explored
              in a supportive and accessible way.
            </p>
            <p>
              Rather than focusing on performance or complex poses, the practice emphasises awareness,
              presence and connection with the body.
            </p>
            <p>
              Yoga and Pilates are approached as tools that support physical wellbeing while encouraging a
              more balanced and mindful approach to everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Audrey */}
      <SplitSection
        title="Meet Audrey Buchanan"
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
        imageAlt="Audrey Buchanan yoga teacher"
        bgColor="bg-mist/30"
      >
        <p>
          Audrey Buchanan is the founder and teacher behind Present Heart Living.
        </p>
        <p>
          Her journey with yoga began more than thirty years ago and has developed into a lifelong
          exploration of movement, mindfulness and wellbeing.
        </p>
        <p>
          Audrey also brings extensive experience from her career in education, having worked as a primary
          teacher and head teacher. This background influences her clear and supportive teaching style,
          helping students feel confident and comfortable within their practice.
        </p>
      </SplitSection>

      {/* Training and Qualifications */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Training and Qualifications</h2>
          <p className="text-peat/80 mb-6">Audrey&apos;s training includes:</p>
          <ul className="space-y-3 text-peat/80">
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              500 Hour Yoga Alliance recognised qualification
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Breathwork facilitator certification
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Trauma informed yoga training
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Yoga nidra qualification
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Sacred sound training through Yoga Campus
            </li>
          </ul>
          <p className="text-peat/80 mt-6">
            She is currently undertaking Lolita Legacy Comprehensive Pilates Training, working towards
            qualification as a third generation Pilates teacher.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Teaching Philosophy</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              At the heart of Present Heart Living is a simple belief: yoga and mindful movement help us
              become more aware of how we move, breathe and live.
            </p>
            <p>
              Classes encourage students to move with attention, breathe with intention and develop
              compassion toward themselves.
            </p>
            <p>
              Over time, this awareness often supports greater balance, resilience and wellbeing in
              everyday life.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Begin Your Practice"
        primaryCTA={{ label: "Explore Classes", href: "/classes" }}
        secondaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
