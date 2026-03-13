import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Yoga Classes Black Isle | Present Heart Living",
  description:
    "Yoga classes near the Black Isle. Present Heart Living offers yoga, Pilates and restorative practices designed to support balance, relaxation and wellbeing in the Highlands.",
};

export default function YogaBlackIslePage() {
  return (
    <>
      <Hero
        title="Yoga Classes on the Black Isle"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop"
        imageAlt="Highland landscape near the Black Isle"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              The Black Isle is known for its beautiful landscapes, strong sense of community and connection
              to nature. Yoga offers a natural complement to this environment, encouraging movement, breathing
              and awareness that support a balanced way of living.
            </p>
            <p>
              Present Heart Living offers yoga and Pilates classes designed to help individuals slow down,
              reconnect with their bodies and cultivate a greater sense of wellbeing.
            </p>
            <p>
              Classes are welcoming, inclusive and suitable for beginners as well as those with more experience.
            </p>
          </div>
        </div>
      </section>

      {/* Calm Environment */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Calm and Supportive Yoga Environment</h2>
          <p className="text-peat/80 mb-4">
            Present Heart Living provides a welcoming space for students from across the Black Isle including:
          </p>
          <ul className="space-y-2 text-peat/80 mb-6">
            {["Fortrose", "Rosemarkie", "Avoch", "Cromarty", "Munlochy"].map((place) => (
              <li key={place} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {place}
              </li>
            ))}
          </ul>
          <p className="text-peat/80">
            Classes encourage mindful movement and breath awareness, helping students develop strength and
            flexibility while supporting mental clarity and emotional balance.
          </p>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Yoga Practices Offered</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2">Seasonal Flow Yoga</h3>
              <p className="text-peat/80">A flowing yoga practice combining movement and breath.</p>
            </div>
            <div>
              <h3 className="mb-2">Restorative Yoga</h3>
              <p className="text-peat/80">
                A slow and deeply relaxing practice designed to support rest and recovery.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Yin Yoga</h3>
              <p className="text-peat/80">
                A reflective practice that focuses on joint mobility and connective tissue health.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Pilates Classes</h3>
              <p className="text-peat/80">
                Pilates supports core strength, posture and healthy movement patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellbeing */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Yoga and Wellbeing in the Highlands</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              For many people living on the Black Isle, yoga provides a valuable way to balance busy lifestyles
              while staying connected to wellbeing.
            </p>
            <p>
              Regular practice can support both physical health and emotional balance, helping students develop
              a more mindful relationship with movement and breath.
            </p>
          </div>
        </div>
      </section>

      {/* Begin */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Begin Your Yoga Practice on the Black Isle</h2>
          <p className="text-peat/80">
            If you live on the Black Isle and are looking for yoga classes nearby, Present Heart Living offers
            a welcoming and supportive environment to begin or deepen your practice.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin?"
        primaryCTA={{ label: "Explore Classes", href: "/classes" }}
        secondaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
