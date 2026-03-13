import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import ClassCard from "@/components/cards/ClassCard";

export const metadata: Metadata = {
  title: "Yoga Retreats UK | Present Heart Living Retreats",
  description:
    "Discover yoga and wellbeing retreats with Present Heart Living. Experiences combining yoga, breathwork, mindfulness and time in nature.",
};

export default function RetreatsPage() {
  return (
    <>
      <Hero
        title="Yoga and Wellbeing Retreats"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop"
        imageAlt="Scottish Highlands landscape"
        variant="narrow"
      />

      {/* Step Away */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Step Away from Everyday Life</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6 mx-auto">
            <p>
              Retreats offer the opportunity to slow down and reconnect with yourself in supportive natural
              environments.
            </p>
            <p>
              Present Heart Living retreats combine yoga, breathwork and mindfulness practices with time in
              nature.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center">What to Expect</h2>
          <p className="text-peat/80 mb-4 text-center">Retreats may include:</p>
          <ul className="space-y-3 text-peat/80 max-w-md mx-auto">
            {[
              "Yoga practices",
              "Breathwork sessions",
              "Guided relaxation",
              "Sound baths",
              "Time in nature",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80 mt-6 text-center">
            These experiences create space for rest, reflection and personal renewal.
          </p>
        </div>
      </section>

      {/* Who For */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center">Who Retreats Are For</h2>
          <p className="text-peat/80 mb-4 text-center">Retreats are suitable for people seeking:</p>
          <ul className="space-y-3 text-peat/80 max-w-md mx-auto">
            {[
              "Rest from busy routines",
              "A deeper yoga practice",
              "Time for reflection",
              "Connection with nature",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Retreat Types */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-10">Upcoming Retreats</h2>
          <p className="text-peat/80 text-center mb-10 max-w-2xl mx-auto">
            Explore upcoming retreat experiences and discover an opportunity to pause, restore and reconnect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ClassCard
              title="UK Retreats"
              description="Step away from daily routines and immerse yourself in a slower, more reflective pace of living."
              href="/retreats/uk-retreats"
              imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
              imageAlt="UK retreat landscape"
            />
            <ClassCard
              title="International Retreats"
              description="Combine travel with meaningful time for rest, reflection and wellbeing."
              href="/retreats/international-retreats"
              imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
              imageAlt="International retreat location"
            />
            <ClassCard
              title="The Retreat Experience"
              description="Discover what a retreat with Present Heart Living looks and feels like."
              href="/retreats/retreat-experience"
              imageSrc="https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop"
              imageAlt="Retreat experience"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Retreat?"
        primaryCTA={{ label: "Explore Retreats", href: "/retreats/uk-retreats" }}
      />
    </>
  );
}
