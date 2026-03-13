import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Yoga Classes Inverness | Present Heart Living",
  description:
    "Looking for yoga classes near Inverness? Present Heart Living offers welcoming yoga, Pilates and restorative practices designed to support wellbeing, strength and relaxation in the Highlands.",
};

export default function YogaInvernessPage() {
  return (
    <>
      <Hero
        title="Yoga Classes Near Inverness"
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop"
        imageAlt="Yoga class near Inverness"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              For many people living in or around Inverness, yoga offers an opportunity to pause, move with
              awareness and reconnect with the body.
            </p>
            <p>
              Present Heart Living offers yoga classes designed to support both physical wellbeing and mental
              balance. Through mindful movement, breathwork and relaxation practices, students develop strength,
              flexibility and a greater sense of calm.
            </p>
            <p>
              Classes are welcoming and suitable for beginners as well as experienced practitioners looking to
              deepen their practice.
            </p>
          </div>
        </div>
      </section>

      {/* Welcoming Practice */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Welcoming Yoga Practice for Inverness Students</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living welcomes students from Inverness and surrounding areas who are looking for a
              supportive and inclusive yoga environment.
            </p>
            <p>
              Classes focus on developing awareness through movement and breath rather than achieving complex
              poses. This approach allows students to build strength and flexibility while cultivating a deeper
              connection with their bodies.
            </p>
            <p>
              Whether you are completely new to yoga or returning after time away, classes are designed to
              support your individual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Types of Yoga Classes Available</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2">Seasonal Flow Yoga</h3>
              <p className="text-peat/80">
                A flowing practice combining breath and movement to build strength, flexibility and balance.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Restorative Yoga</h3>
              <p className="text-peat/80">
                A deeply calming practice designed to release tension and support nervous system recovery.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Yin Yoga</h3>
              <p className="text-peat/80">
                A slower practice that works with connective tissues and encourages mindfulness through
                stillness.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Pilates Classes</h3>
              <p className="text-peat/80">
                Pilates complements yoga by strengthening the muscles that support posture, stability and
                healthy movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Benefits of Yoga Practice</h2>
          <p className="text-peat/80 mb-4">
            Students attending classes from Inverness often report benefits such as:
          </p>
          <ul className="space-y-3 text-peat/80">
            {[
              "Improved flexibility",
              "Reduced stress",
              "Increased body awareness",
              "Better sleep",
              "Greater mental clarity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80 mt-6">
            Yoga provides a sustainable way to support wellbeing while developing a stronger and more balanced
            relationship with the body.
          </p>
        </div>
      </section>

      {/* Join */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Join a Yoga Class Near Inverness</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Present Heart Living is located within easy reach of Inverness, making it accessible for those
              seeking a calm and welcoming place to practise yoga.
            </p>
            <p>
              Whether you are beginning your yoga journey or looking to deepen an existing practice, you are
              warmly invited to join a class.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin?"
        primaryCTA={{ label: "Book a Class", href: "/contact" }}
      />
    </>
  );
}
