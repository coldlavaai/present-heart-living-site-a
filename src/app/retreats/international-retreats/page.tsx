import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "International Yoga Retreats | Present Heart Living",
  description:
    "International yoga retreats combining travel with rest, reflection and wellbeing practices.",
};

export default function InternationalRetreatsPage() {
  return (
    <>
      <Hero
        title="International Yoga Retreats"
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop"
        imageAlt="Beautiful international retreat location"
        variant="narrow"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              International retreats offer the opportunity to combine travel with meaningful time for rest,
              reflection and wellbeing.
            </p>
            <p>
              These retreats are designed to take place in inspiring locations where natural surroundings
              encourage a deeper sense of calm and presence. Participants are invited to step away from familiar
              routines and experience yoga and mindful practices within new environments.
            </p>
            <p>
              The structure of international retreats is similar to UK retreats, combining yoga sessions,
              breathwork practices and time for relaxation. However, these retreats also allow participants to
              explore new landscapes, cultures and experiences.
            </p>
            <p>
              The intention is to create a balanced rhythm between guided practices and personal time. Students
              may choose to explore the surroundings, rest quietly or participate in group activities depending
              on what feels supportive for them.
            </p>
            <p>
              International retreats offer an opportunity to deepen yoga practice while enjoying travel in a way
              that feels nourishing and restorative.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in an International Retreat?"
        primaryCTA={{ label: "Explore International Retreats", href: "/contact" }}
      />
    </>
  );
}
