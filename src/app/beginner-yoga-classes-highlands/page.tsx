import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Beginner Yoga Classes Highlands | Start Yoga with Confidence",
  description:
    "New to yoga? Beginner yoga classes in the Scottish Highlands with Present Heart Living. Gentle, welcoming sessions designed to help you build confidence, flexibility and wellbeing.",
};

export default function BeginnerYogaPage() {
  return (
    <>
      <Hero
        title="Beginner Yoga Classes in the Scottish Highlands"
        imageSrc="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1600&h=900&fit=crop"
        imageAlt="Beginner friendly yoga class"
        variant="narrow"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              Starting yoga for the first time can feel both exciting and slightly intimidating. Many people
              worry that they may not be flexible enough or experienced enough to attend a class.
            </p>
            <p>
              At Present Heart Living, beginner yoga classes are designed to be welcoming, supportive and
              accessible for everyone. You do not need any previous experience to begin. The focus is simply on
              learning to move with awareness, breathe more deeply and develop a comfortable relationship with
              your body.
            </p>
            <p>
              Classes introduce yoga in a calm and structured way, allowing you to build confidence while
              discovering the benefits of mindful movement.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">What to Expect in a Beginner Yoga Class</h2>
          <p className="text-peat/80 mb-4">
            Beginner classes are designed to help students feel comfortable while gradually introducing the
            foundations of yoga practice.
          </p>
          <p className="text-peat/80 mb-4">A typical class may include:</p>
          <ul className="space-y-3 text-peat/80 mb-6">
            {["Gentle warm up movements", "Breathing techniques", "Simple yoga postures", "Guided relaxation"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80">
            Students are encouraged to move at their own pace and modify movements when needed. The aim is
            not to achieve perfect poses but to develop awareness of how the body moves and feels.
          </p>
        </div>
      </section>

      {/* Flexibility */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Do You Need to Be Flexible to Start Yoga?</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              One of the most common questions people ask before attending their first yoga class is whether
              they need to be flexible.
            </p>
            <p>The answer is no.</p>
            <p>
              Yoga is not something that requires flexibility before you begin. Flexibility develops naturally
              over time as the body becomes stronger and more familiar with movement.
            </p>
            <p>
              Many students begin yoga precisely because they feel stiff or disconnected from their bodies.
              Beginner classes focus on creating a safe environment where everyone can explore movement
              comfortably.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Benefits of Beginner Yoga Practice</h2>
          <p className="text-peat/80 mb-4">
            Even gentle yoga practices can have significant benefits for both body and mind.
          </p>
          <p className="text-peat/80 mb-4">Students often report improvements such as:</p>
          <ul className="space-y-3 text-peat/80 mb-6">
            {["Greater flexibility", "Reduced stress", "Improved sleep", "Better posture", "Increased energy"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80">
            Yoga also encourages greater awareness of breathing and movement, which can support wellbeing in
            everyday life.
          </p>
        </div>
      </section>

      {/* Welcoming Environment */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">A Welcoming Environment for New Students</h2>
          <p className="text-peat/80 mb-4">
            Present Heart Living was created to offer a calm and supportive environment where individuals can
            explore yoga without pressure or expectation.
          </p>
          <p className="text-peat/80 mb-4">Classes are suitable for people who may be:</p>
          <ul className="space-y-3 text-peat/80">
            {[
              "Completely new to yoga",
              "Returning to movement after a break",
              "Seeking a slower and more mindful practice",
              "Looking for ways to reduce stress",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-sage mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-peat/80 mt-6">
            Everyone is encouraged to approach yoga with curiosity and self compassion.
          </p>
        </div>
      </section>

      {/* First Class */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Your First Yoga Class</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              If you are considering attending your first yoga class, there are only a few simple things to
              know.
            </p>
            <p>Wear comfortable clothing that allows you to move easily.</p>
            <p>Bring a yoga mat if you have one, although mats may also be provided.</p>
            <p>Arrive a few minutes early so you can settle into the space.</p>
            <p>
              Most importantly, come with an open mind and a willingness to explore how movement and breathing
              can support your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Begin */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Begin Your Yoga Journey</h2>
          <div className="prose text-peat/80 leading-relaxed space-y-6">
            <p>
              If you are looking for beginner yoga classes in the Highlands, Present Heart Living offers a
              welcoming place to start.
            </p>
            <p>
              Whether your goal is to improve flexibility, reduce stress or simply take time to reconnect
              with yourself, yoga can provide a supportive path toward greater balance and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-mist/30">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2">Is yoga suitable for complete beginners?</h3>
              <p className="text-peat/80">
                Yes. Classes are designed to be accessible and welcoming for people with no previous yoga
                experience.
              </p>
            </div>
            <div>
              <h3 className="mb-2">What should I bring to a yoga class?</h3>
              <p className="text-peat/80">Comfortable clothing and a yoga mat if you have one.</p>
            </div>
            <div>
              <h3 className="mb-2">How often should beginners practise yoga?</h3>
              <p className="text-peat/80">
                Many beginners start with one class per week and gradually increase as they feel comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start?"
        primaryCTA={{ label: "Book Your First Class", href: "/contact" }}
      />
    </>
  );
}
