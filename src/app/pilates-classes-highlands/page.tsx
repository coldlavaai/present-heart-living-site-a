import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pilates Classes Highlands | Present Heart Living",
  description:
    "Pilates classes in the Scottish Highlands. Present Heart Living offers Pilates designed to improve posture, strength and body awareness in a calm supportive environment.",
};

export default function PilatesPage() {
  return (
    <>
      <Hero
        title="Pilates Classes in the Scottish Highlands"
        imageSrc="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=900&fit=crop"
        imageAlt="Pilates mat practice"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Pilates is a practice designed to strengthen the body, improve posture and develop greater
              awareness of movement.
            </p>
            <p>
              At Present Heart Living, Pilates classes are taught with a mindful approach that complements yoga
              practices. The focus is on controlled movement, alignment and building strength that supports long
              term physical wellbeing.
            </p>
            <p>
              Classes are suitable for beginners and those looking to develop a stronger foundation for healthy
              movement.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Benefits of Pilates</h2>
          <p className="text-peat/80 mb-6">
            Pilates offers a wide range of benefits for people of all ages and levels of experience.
          </p>
          <p className="text-peat/80 mb-4">These may include:</p>
          <ul className="space-y-3 text-peat/80">
            {[
              "Improved core strength",
              "Better posture",
              "Increased flexibility",
              "Reduced back pain",
              "Improved movement awareness",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80 mt-6">
            Through consistent practice, Pilates helps build strength and resilience throughout the body.
          </p>
        </div>
      </section>

      {/* Pilates and Yoga */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Pilates and Yoga Working Together</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Pilates and yoga complement one another by developing both strength and flexibility.
            </p>
            <p>
              While yoga often focuses on breath and mobility, Pilates strengthens the muscles that stabilise
              the body and support healthy posture.
            </p>
            <p>Together they create a balanced approach to movement and wellbeing.</p>
          </div>
        </div>
      </section>

      {/* Who For */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Who Pilates Classes Are For</h2>
          <p className="text-peat/80 mb-4">Pilates classes are suitable for:</p>
          <ul className="space-y-3 text-peat/80">
            {[
              "Beginners",
              "People returning to exercise",
              "Those looking to improve posture",
              "Individuals seeking a mindful approach to movement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Join */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Join a Pilates Class in the Highlands</h2>
          <p className="text-peat/80">
            Present Heart Living offers Pilates classes designed to support strength, balance and healthy
            movement in a calm and welcoming environment.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin?"
        primaryCTA={{ label: "Book a Pilates Class", href: "/contact" }}
      />
    </>
  );
}
