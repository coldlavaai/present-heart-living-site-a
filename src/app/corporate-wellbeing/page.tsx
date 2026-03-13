import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Corporate Wellbeing Programmes | Yoga & Mindfulness for Businesses",
  description:
    "Corporate wellbeing sessions including yoga, breathwork and mindfulness workshops designed to support healthier workplaces across the Highlands.",
};

export default function CorporateWellbeingPage() {
  return (
    <>
      <Hero
        title="Corporate Wellbeing Programmes"
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
        imageAlt="Workplace wellbeing session"
        variant="narrow"
      />

      {/* Supporting Wellbeing */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Supporting Wellbeing in the Workplace</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Modern working environments can place significant demands on both physical and mental wellbeing.
              Long hours at desks, constant digital communication and the pressures of busy schedules can
              often lead to fatigue, stress and reduced focus.
            </p>
            <p>
              Corporate wellbeing programmes offer organisations an opportunity to support their teams by
              creating space for movement, relaxation and mindful awareness.
            </p>
            <p>
              At Present Heart Living, sessions are designed to help employees step away from the demands of
              their workday and reconnect with their bodies through simple movement and breathing practices.
              These sessions can help individuals develop tools that support focus, resilience and overall
              wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* For Teams */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Yoga and Mindfulness for Teams</h2>
          <p className="text-peat/80 mb-4">
            Corporate sessions combine gentle movement, breathing techniques and relaxation practices that
            can easily be integrated into the working day.
          </p>
          <p className="text-peat/80 mb-4">Sessions may include:</p>
          <ul className="space-y-3 text-peat/80 mb-6">
            {[
              "Gentle yoga or movement practices",
              "Breathing techniques for stress management",
              "Relaxation and mindfulness exercises",
              "Guided rest or meditation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80">
            The aim is not to provide a demanding fitness session, but to offer a supportive environment
            where employees can pause, reset and return to their work with renewed focus.
          </p>
        </div>
      </section>

      {/* Benefits for Organisations */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Benefits for Organisations</h2>
          <p className="text-peat/80 mb-4">
            Investing in wellbeing practices can support both employees and organisations.
          </p>
          <p className="text-peat/80 mb-4">Regular wellbeing sessions may help teams experience:</p>
          <ul className="space-y-3 text-peat/80 mb-6">
            {[
              "Reduced stress and tension",
              "Improved concentration and focus",
              "Better posture and physical comfort",
              "Increased energy levels",
              "Stronger workplace morale",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80">
            Even short sessions can provide valuable time for employees to step away from their screens and
            reconnect with a calmer rhythm of breathing and movement.
          </p>
        </div>
      </section>

      {/* Flexible Options */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Flexible Session Options</h2>
          <p className="text-peat/80 mb-4">
            Corporate wellbeing sessions can be adapted to suit the needs of different organisations.
          </p>
          <p className="text-peat/80 mb-4">Options may include:</p>
          <ul className="space-y-3 text-peat/80 mb-6">
            {[
              "Workplace yoga sessions",
              "Breathwork and relaxation workshops",
              "Wellbeing sessions for team away days",
              "Regular weekly or monthly programmes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80">
            Sessions can take place at the workplace or within a suitable studio environment, depending on
            what works best for your organisation.
          </p>
        </div>
      </section>

      {/* Enquire */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Enquire About Corporate Wellbeing</h2>
          <p className="text-peat/80">
            If your organisation is interested in supporting staff wellbeing through yoga, mindfulness or
            relaxation practices, Present Heart Living would be happy to discuss options that suit your team.
          </p>
        </div>
      </section>

      <CTABanner
        title="Support Your Team's Wellbeing"
        primaryCTA={{ label: "Enquire About Corporate Sessions", href: "/contact" }}
        secondaryCTA={{ label: "Contact Present Heart Living", href: "/contact" }}
      />
    </>
  );
}
