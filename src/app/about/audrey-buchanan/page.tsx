import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SplitSection from "@/components/sections/SplitSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Audrey Buchanan | Yoga Teacher at Present Heart Living",
  description:
    "Meet Audrey Buchanan, founder of Present Heart Living. With over 30 years of yoga practice, Audrey offers mindful movement, breathwork and wellbeing practices in the Scottish Highlands.",
};

export default function AudreyPage() {
  return (
    <>
      <Hero
        title="Meet Audrey Buchanan"
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=900&fit=crop"
        imageAlt="Audrey Buchanan, yoga teacher"
        variant="narrow"
      />

      {/* A Lifelong Practice */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Lifelong Practice</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Audrey Buchanan is the founder and teacher behind Present Heart Living. Her relationship with yoga
              began more than thirty years ago and has grown into a lifelong exploration of movement, mindfulness
              and wellbeing.
            </p>
            <p>
              For Audrey, yoga has never been simply about physical exercise. Instead, it has always been a practice
              of awareness — an opportunity to understand how the body moves, how the breath supports us and how
              moments of stillness can bring clarity to everyday life.
            </p>
            <p>
              This approach continues to shape the way she teaches today. Classes are designed to help students
              explore movement with curiosity and patience, creating space for both physical development and inner
              awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Experience in Teaching */}
      <SplitSection
        title="Experience in Teaching and Education"
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
        imageAlt="Teaching yoga class"
        bgColor="bg-mist/30"
      >
        <p>
          Before creating Present Heart Living, Audrey spent many years working in education as a primary teacher
          and later as a head teacher.
        </p>
        <p>
          This experience has had a strong influence on her teaching style. Audrey brings clarity, structure and
          patience into every class, helping students feel comfortable and supported as they learn.
        </p>
        <p>
          Her background in education also shapes the way she explains movement and breathing practices, ensuring
          that students can understand not only what they are doing but why those practices support their wellbeing.
        </p>
      </SplitSection>

      {/* Training */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Training and Professional Development</h2>
          <p className="text-peat/80 mb-6">
            Audrey has completed extensive training in yoga and related wellbeing practices, including:
          </p>
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
              Trauma Informed Yoga training
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Yoga Nidra teaching qualification
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Sacred Sound and mantra training through Yoga Campus
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage mt-1">✦</span>
              Power of Awareness training with Jack Kornfield and Tara Brach
            </li>
          </ul>
          <p className="text-peat/80 mt-6">
            She is currently undertaking the Lolita Legacy Comprehensive Pilates Training, which will qualify her
            as a third-generation Pilates teacher.
          </p>
          <p className="text-peat/80 mt-4">
            Audrey believes strongly in continuing education and regularly deepens her understanding of movement,
            mindfulness and wellbeing practices.
          </p>
        </div>
      </section>

      {/* Supportive Approach */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Supportive Approach to Practice</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Audrey&apos;s teaching focuses on helping students develop awareness through movement and breath.
              Rather than encouraging performance or pushing the body beyond its limits, classes invite students to
              move in ways that feel supportive and sustainable. This approach allows individuals of all experience
              levels to explore yoga and mindful movement with confidence.
            </p>
            <p>
              Many students find that over time this style of practice supports not only greater physical strength
              and flexibility but also a deeper sense of calm and balance in everyday life.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in practising with Audrey?"
        primaryCTA={{ label: "Explore Classes", href: "/classes" }}
        secondaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
