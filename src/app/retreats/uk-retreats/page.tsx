import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "UK Yoga Retreats | Present Heart Living",
  description:
    "Yoga retreats across the UK designed to support rest, reflection and mindful movement.",
};

export default function UKRetreatsPage() {
  return (
    <>
      <Hero
        title="UK Yoga Retreats"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop"
        imageAlt="Beautiful UK landscape for yoga retreat"
        variant="narrow"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living retreats offer the opportunity to step away from daily routines and immerse
              yourself in a slower, more reflective pace of living.
            </p>
            <p>
              UK retreats are designed to take place in calm natural environments where participants can reconnect
              with themselves and with nature. Locations are chosen carefully to provide peaceful surroundings that
              support rest and reflection.
            </p>
            <p>
              Retreats typically include a combination of yoga practices, breathwork sessions, guided relaxation
              and time for quiet reflection. Participants may also enjoy walks in nature, journaling sessions and
              shared meals that encourage connection within a small group environment.
            </p>
            <p>
              The intention of these retreats is not to create an intensive schedule but rather to offer space for
              restoration and self discovery. Participants are encouraged to move at their own pace and take time
              to listen to what their bodies and minds need.
            </p>
            <p>
              UK retreats are suitable for both beginners and experienced practitioners. Many participants join
              retreats to step away from busy routines, reconnect with themselves and deepen their understanding
              of mindful movement.
            </p>
            <p>
              These experiences provide a rare opportunity to pause, reflect and return home feeling restored and
              inspired.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in a UK Retreat?"
        primaryCTA={{ label: "View Upcoming Retreats", href: "/contact" }}
      />
    </>
  );
}
