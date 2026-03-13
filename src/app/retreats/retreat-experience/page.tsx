import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "The Retreat Experience | Present Heart Living",
  description:
    "Discover what a yoga retreat with Present Heart Living looks and feels like. Rest, reflection and renewal.",
};

export default function RetreatExperiencePage() {
  return (
    <>
      <Hero
        title="The Retreat Experience"
        imageSrc="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=900&fit=crop"
        imageAlt="Peaceful retreat setting"
        variant="narrow"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              A retreat is more than simply attending a series of yoga classes. It is an opportunity to step away
              from everyday responsibilities and create space for reflection, rest and renewal.
            </p>
            <p>
              At Present Heart Living, retreats are designed to provide a supportive environment where
              participants can explore yoga and mindfulness at a slower and more spacious pace.
            </p>
            <p>
              Days may begin with gentle yoga or breathwork practices that help participants settle into the day.
              Later sessions may include flowing yoga practices, relaxation techniques or time for quiet
              reflection.
            </p>
            <p>
              Meals are often shared within a small group setting, creating opportunities for conversation and
              connection with others who are also seeking time for rest and reflection.
            </p>
            <p>
              Between scheduled practices, participants are encouraged to spend time in nature, rest or explore
              the surroundings.
            </p>
            <p>
              Many people find that retreat experiences allow them to step back from the busyness of everyday
              life and reconnect with a deeper sense of clarity and calm.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Experience a Retreat?"
        primaryCTA={{ label: "Discover Retreats", href: "/retreats" }}
      />
    </>
  );
}
