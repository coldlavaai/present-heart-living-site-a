import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Teaching Philosophy & Qualifications | Present Heart Living",
  description:
    "Discover the teaching philosophy and professional training behind Present Heart Living. Learn about Audrey Buchanan's approach to yoga, Pilates, breathwork and mindful movement.",
};

export default function TeachingPhilosophyPage() {
  return (
    <>
      <Hero
        title="Teaching Philosophy and Training"
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop"
        imageAlt="Mindful yoga practice"
        variant="narrow"
      />

      {/* Philosophy of Awareness */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Philosophy of Awareness</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              At Present Heart Living, yoga and mindful movement are approached as practices of awareness rather
              than performance.
            </p>
            <p>
              The intention of each class is to help students develop a deeper understanding of how their bodies
              move, how their breath supports that movement and how moments of stillness can bring balance to
              everyday life.
            </p>
            <p>
              Rather than focusing on achieving complex postures, the emphasis is on building a sustainable practice
              that supports strength, flexibility and resilience over time.
            </p>
            <p>
              Students are encouraged to move with attention, breathe with intention and approach the practice with
              curiosity and compassion. By developing awareness through movement and breath, individuals often
              discover that the benefits of yoga extend far beyond the mat.
            </p>
            <p>
              Over time, this approach can support greater physical wellbeing while also helping students navigate
              the demands of modern life with a greater sense of calm and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusive Teaching */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Inclusive and Supportive Teaching</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living is designed to be welcoming to people of all ages and experience levels.
            </p>
            <p>
              You do not need to be flexible or experienced to begin. Classes are structured to help students feel
              comfortable exploring movement at their own pace while learning the foundations of yoga and mindful
              movement.
            </p>
            <p>
              Modifications and variations are offered so that each student can practise in a way that feels
              appropriate for their body.
            </p>
            <p>
              This supportive approach allows individuals to develop confidence gradually while discovering the
              benefits of regular practice.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Training */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Professional Training and Qualifications</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              The teaching approach at Present Heart Living is supported by extensive training and ongoing
              professional development.
            </p>
            <p>
              Audrey Buchanan holds a 500 Hour Yoga Alliance recognised qualification and has trained in several
              complementary practices that support holistic wellbeing.
            </p>
          </div>
          <p className="text-peat/80 mt-6 mb-4">Training includes:</p>
          <ul className="space-y-3 text-peat/80">
            {[
              "Hatha Yoga",
              "Yin Yoga",
              "Restorative Yoga",
              "Vinyasa Yoga",
              "Breathwork Facilitation",
              "Trauma Informed Yoga",
              "Yoga Nidra",
              "Sacred Sound and Mantra Practices",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="prose text-peat/80 leading-relaxed space-y-6 mt-6">
            <p>
              Audrey has also completed the Power of Awareness training with internationally respected meditation
              teachers Jack Kornfield and Tara Brach.
            </p>
            <p>
              She is currently undertaking the Lolita Legacy Comprehensive Pilates Training, which will qualify her
              as a third-generation Pilates teacher.
            </p>
          </div>
        </div>
      </section>

      {/* Continued Learning */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Commitment to Continued Learning</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Yoga and mindful movement are lifelong practices, and Audrey believes that teaching should continue
              to evolve through ongoing study and experience.
            </p>
            <p>
              By continuing to learn from experienced teachers and training programmes, she is able to bring fresh
              insight and understanding into her classes while remaining grounded in the core principles of mindful
              movement and awareness.
            </p>
            <p>
              This commitment to continuous learning ensures that the practices offered at Present Heart Living
              remain thoughtful, informed and supportive for every student.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in experiencing this approach to practice?"
        primaryCTA={{ label: "Explore Classes", href: "/classes" }}
        secondaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
